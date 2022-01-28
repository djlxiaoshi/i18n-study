const { useBabelRc, override, addWebpackPlugin } = require('customize-cra')
const WebpackPluginI18N = require('./plugins/webpack-plugin-i18n');

const config = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    addWebpackPlugin(
        new WebpackPluginI18N()
    )
);

module.exports = config