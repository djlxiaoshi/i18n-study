
const fs = require('fs');

module.exports = function(babel) {
    const I18N_COMMENT_KEY = 'I18N_COMMENT_FLAG'
    return {
        name: 'babel-plugin-i18n',
        visitor: {
            CallExpression(path) {
                if(path.node.callee.name === 't') {
                    if(path.node.arguments.length) {
                        const first = path.node.arguments[0];
                        path.addComment('leading', `${I18N_COMMENT_KEY} ${first.value}`)
                    }
                }
            }
        },
    };
  }
