var config = require('../../config').angularConfig;
var vscode = require('vscode');
var author = vscode.workspace.getConfiguration('yx').get('name');
function service(name) {
  let str = `
  'use strict';
  /**
   *
   * @ngdoc controller
   * @name ${config.MODULE_NAME}.service:${name}
   * @description service类
   * @author ${author}
   * @date ${new Date()}
   */
  angular.module('${config.MODULE_NAME}')
      .service('${name}',function(createServiceFactory) {
    var baseUrl = '';
    var method = [

    ];
    createServiceFactory.call(this, baseUrl, method);

  })
  `;
  return str;
};
module.exports = service;
