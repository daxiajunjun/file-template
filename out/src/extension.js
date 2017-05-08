"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require('vscode');
const createNG = require("./createNG");
const createReact = require("./createReact");
function activate(context) {
    var vs = vscode;
    var disposableReact = vs.commands.registerCommand('extension.react', function () {
        var items = [];
        items.push({ label: 'component', description: '组件(完整生命周期)' });
        items.push({ label: 'stateless', description: '纯组件' });
        items.push({ label: 'service', description: '服务类' });
        vs.window.showQuickPick(items).then((selection) => {
            var type = selection.label;
            if (!type) {
                return;
            }
            var inputBoxOption = { prompt: '输入文件名称(包裹文件夹)' };
            vs.window.showInputBox(inputBoxOption).then((input) => {
                if (input) {
                    createReact.createReact(type, input);
                }
            });
        });
    });
    var disposableAngluar = vs.commands.registerCommand('extension.angular', function () {
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
            if (!type) {
                return;
            }
            var inputBoxOption = { prompt: '输入文件名称(包裹文件夹)' };
            vs.window.showInputBox(inputBoxOption).then((input) => {
                if (input) {
                    createNG.createNG(type, input);
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
//# sourceMappingURL=extension.js.map