var path = require('path');
var vscode = require('vscode');

let BASE_DIR = 'src/main/webapp';

var angularConfig = {
  BASE_DIR: BASE_DIR,
  MODULE_NAME: 'adminApp',
  JS_FILE_SUFFIX: '.js',
  HTML_FILE_SUFFIX: '.html',
  ctrl: {
    dir: 'scripts/controllers',
    suffix: 'Ctrl',
    content: 'Controller'
  },
  service: {
    dir: 'scripts/services',
    suffix: '',
    content: 'Service'
  },
  filter: {
    dir: 'scripts/filters',
    suffix: '',
    content: 'Filter'
  },
  directive: {
    dir: 'scripts/directives',
    suffix: '',
    content: 'Directive'
  },
  html: {
    dir: 'views',
    suffix: '',
    content: 'HTML'
  },
  INDEX_FILE_PATH: path.resolve(vscode.workspace.rootPath, BASE_DIR, 'index.html')
};
module.exports = {
  angularConfig: angularConfig
};
