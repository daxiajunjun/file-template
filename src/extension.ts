var vscode = require('vscode');
var createFile = require('./index');
function activate(context) {
  var vs = vscode;
  var disposableReact = vs.commands.registerCommand('file.react', function () {
  });
  var disposableAngluar = vs.commands.registerCommand('file.angular', function () {
    var items = [];
    items.push({ label: 'page', description: '创建页面，包括控制器、页面模板、服务类' });
    items.push({ label: 'ctrl', description: '创建控制器' });
    items.push({ label: 'service', description: '创建服务类' });
    items.push({ label: 'directive', description: '创建指令' });
    items.push({ label: 'filter', description: '创建过滤器' });
    items.push({ label: 'html', description: '创建页面模板' });
    items.push({ label: 'modal', description: '创建弹框' });
    vs.window.showQuickPick(items).then((selection) => {
      var type = selection.label;
      var inputBoxOption = {prompt: '输入文件名称(包裹文件夹)'};
      vs.window.showInputBox(inputBoxOption).then((input) => {
        if (input) {
          createFile.createNG(type, input);
        }
      });
    });
  });
  context.subscriptions.push(disposableReact, disposableAngluar);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;
