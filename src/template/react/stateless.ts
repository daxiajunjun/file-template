var vscode = require('vscode');
var author = vscode.workspace.getConfiguration('yx').get('name');
function stateless() {
  var str =
`
/**
 * @name
 * @desc
 * @author ${author}
 * @date: ${new Date()}
 */
import React,{PropTypes} from 'react';
import {} from 'antd';
import PropTypes from 'prop-types';

const componentName = props => {
  return (
    <div>
    </div>
  );
};

componentName.propTypes = {

};

export default componentName;
`;
  return str;
};
module.exports = stateless;


