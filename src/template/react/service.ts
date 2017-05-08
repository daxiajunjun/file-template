var vscode = require('vscode');
var author = vscode.workspace.getConfiguration('yx').get('name');
function serviceReact() {
  var str =
`
/**
 * @name
 * @desc
 * @author ${author}
 * @date: ${new Date()}
 */
import ServiceFactory from './createServiceFactory';

var method = [
];
  var baseUrl = '';
  var Service = {};
  ServiceFactory.call(Service, baseUrl, method);
  export default Service;
`;
  return str;
};
module.exports = serviceReact;