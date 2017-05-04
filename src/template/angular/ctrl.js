var config = require('../../config').angularConfig;
var vscode = require('vscode');
var author = vscode.workspace.getConfiguration('yx').get('name');
function controller(name) {
  let str = `
  'use strict';
  /**
   * @ngdoc controller
   * @name ${config.MODULE_NAME}.controller:${name}
   * @description
   * @require
   * @author ${author}
   * @date ${new Date()}
   */
  angular.module('${config.MODULE_NAME}')
  .controller('${name}', ['$scope',function ($scope) {
    var vm = this;
  }]);`;
  return str;
};
module.exports = controller;
