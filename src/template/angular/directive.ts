 var config = require('../../config').angularConfig;
 var vscode = require('vscode');
 var author = vscode.workspace.getConfiguration('yx').get('name');
 function directive(name) {
   let str = `
'use strict';
/**
 *
 * @ngdoc directive
 * @name ${config.MODULE_NAME}.directive:${name}
 * @description 指令类
 * @author ${author}
 * @date ${new Date()}
 */
angular.module('${config.MODULE_NAME}')
    .directive('${name}',function(){
        return {
            restrict: 'E',
            replace: true,
            template: ,
            transclude: true,
            link: function(scope, elem, attrs) {
            }
        }
    })`;
   return str;
 }
 module.exports = directive;