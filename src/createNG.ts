import cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var vscode = require('vscode');
var file = require('./file');
var ctrl = require('./template/angular/ctrl');
var directive = require('./template/angular/directive');
var filter = require('./template/angular/filter');
var html = require('./template/angular/html');
var modal = require('./template/angular/modal');
var service = require('./template/angular/service');
var config = require('./config').angularConfig;

/**
 * 判断需要生成的文件类型
 * @param {string} type 创建文件的类型
 * @param {string} filepath 文件的地址，可以是文件名如test,也可以是多级路径的文件名 test/test
 *
 * @memberOf CreateNG
 */
export function createNG(type, filepath) {
  let filename = filepath.match(/[^/\\\\]+$/)[0]; // 获取文件名称

  // 获取创建文件的目录地址
  let dirPath = '';
  if (filepath.indexOf('/') > 0) {
    dirPath = filepath.substr(0, filepath.lastIndexOf('/'));
  }
  var fileType = config[type];
  var initContent = '';
  var dirname = vscode.workspace.rootPath;
  if (type !== 'page') { // 对page 文件做额外处理
    dirPath = path.resolve(dirname, config.BASE_DIR, fileType.dir, dirPath); // 根据文件类型获得相对路径
    let fileSuffix = (type === 'html' ? config.HTML_FILE_SUFFIX : config.JS_FILE_SUFFIX);
    let fileNameHasSuffix = `${filename}${fileType.suffix}${fileSuffix}`;
    filepath = path.resolve(dirPath, fileNameHasSuffix); // 文件的完整地址
    initContent = getFileContent(type,filename); // 活动初始化内容
    createNGFile(dirPath, filepath, initContent);
  } else {
    createNG('ctrl', filepath);
    createNG('service', filepath);
    createNG('html', filepath);
  }
}

/**
 * @param {any} dirPath  文件目录，如 test/test
 * @param {any} filepath 文件绝对路径名
 * @param {any} initContent 文件的初始化内容
 * @memberOf CreateNG
 */
function createNGFile(dirPath, filepath, initContent) {
  file.createFileAndInit(dirPath, filepath, initContent);

  if (filepath.indexOf('.js') > 0) {
    appendToIndexFile(filepath); // 在index.html文件里面引入穿件的js
  }
}

/**
 * 将文件路径添加到index.html里面
 * @param {any} jsfiles
 *
 * @memberOf CreateNG
 */
function appendToIndexFile(jsfiles) {
  var str = fs.readFileSync(config.INDEX_FILE_PATH, 'utf8');
  var $ = cheerio.load(fs.readFileSync(config.INDEX_FILE_PATH, 'utf8'), {
    decodeEntities: false
  });
  var body = $('body');
  var scripts = body.find('script');
  var lastOfScript = scripts[scripts.length - 1];
  if (jsfiles instanceof Array) {
    jsfiles.forEach((files) => {
      var path = getRelativePath(files);
      $(lastOfScript).after(`\n<script src="/${path}"></script>`);
    });
  } else {
    var path = getRelativePath(jsfiles);
    $(lastOfScript).after(`\n<script src="/${path}"></script>`);
  }
  fs.writeFileSync(config.INDEX_FILE_PATH, $.html());
}

function getRelativePath(path) {
  var index = path.indexOf('scripts');
  return path.substr(index);
}

function getFileContent(type, name) {
  switch (type) {
    case 'ctrl':
      return ctrl(name);
    case 'service':
      return service(name);
    case 'directive':
      return directive(name);
    case 'filter':
      return filter(name);
    case 'html':
      return html(name);
    case 'modal':
      return modal(name);
    default:
      return '';
  }
}

