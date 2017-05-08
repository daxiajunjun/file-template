var config = require('../../config').angularConfig;
var vscode = require('vscode');
var author = vscode.workspace.getConfiguration('yx').get('name');
function filter(name) {
  let str = `
  'use strict';
  /**
   *
   * @ngdoc filter
   * @name ${config.MODULE_NAME}.filter:${name}
   * @description 
   * @author ${author}
   * @date: ${new Date()}
   */
  angular.module('${config.MODULE_NAME}')
      .filter('${name}', function () {
          var map = {

          };
          return function(input) {
            return map[input] || '未知‘;
          };
      });
  `;
  return str;
};
 module.exports = filter;

