var vscode = require('vscode');
var author = vscode.workspace.getConfiguration('yx').get('name');
function component() {
  var str =
`
/**
 * @name
 * @desc
 * @author ${author}
 * @date: ${new Date()}
 */
import React, { Component } from 'react';
import {} from 'antd';
class componentName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}
componentName.propTypes = {

};
export default componentName;
`;
  return str;
};
module.exports = component;