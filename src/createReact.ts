var fs = require('fs');
var path = require('path');
var vscode = require('vscode');
var file = require('./file');
var component = require('./template/react/component');
var service = require('./template/react/service');
var stateless = require('./template/react/stateless');
var config = require('./config').reactConfig;
/**
 * 判断需要生成的文件类型
 * @param {string} type 创建文件的类型
 * @param {string} filepath 文件的地址，可以是文件名如test,也可以是多级路径的文件名 test/test
 *
 * @memberOf CreateNG
 */
export function createReact(type, filepath) {
  if (type !== 'service') {
    filepath += '/index'
  }
  let filename = filepath.match(/[^/\\\\]+$/)[0]; // 获取文件名称

  // 获取创建文件的目录地址
  let dirPath = '';
  if (filepath.indexOf('/') > 0) {
    dirPath = filepath.substr(0, filepath.lastIndexOf('/'));
  }
  var fileType = config[type];
  var initContent = '';
  var dirname = vscode.workspace.rootPath;
    dirPath = path.resolve(dirname, config.BASE_DIR, fileType.dir, dirPath); // 根据文件类型获得相对路径
    let fileSuffix = (type === 'html' ? config.HTML_FILE_SUFFIX : config.JS_FILE_SUFFIX);
    let fileNameHasSuffix = `${filename}${fileSuffix}`;
    filepath = path.resolve(dirPath, fileNameHasSuffix); // 文件的完整地址
    initContent = getFileContent(type,filename); // 活动初始化内容
    file.createFileAndInit(dirPath, filepath, initContent);

}
/**
 * 内容
 */
function getFileContent(type, name) {
  switch (type) {
    case 'component':
      return component(name);
    case 'stateless':
      return stateless(name);
    case 'service':
     return service(name);
    default:
      return '';
  }
}