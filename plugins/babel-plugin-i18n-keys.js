
module.exports = function(babel, args) {
    const { types: t } = babel;
    const {i18nSource} = args;
    return {
        name: 'babel-plugin-i18n',
        visitor: {
            CallExpression(path) {
                if(t.isIdentifier(path.node.callee, {name: 't'})) {
                    if(path.node.arguments.length) {
                        const first = path.node.arguments[0];
                        if(i18nSource[first.value]) {
                            path.replaceWith(t.stringLiteral(i18nSource[first.value]))
                        }
                    }
                }
            }
        },
    };
  }
