const language = process.env.LANGUAGE || 'default';
const i18nRes = require(`./src/locales/${language}`);

module.exports = {
    plugins: [
        // ["./plugins/babel-plugin-i18n.js", {
        //     i18nSource: i18nRes 
        // }],
        ["./plugins/babel-plugin-i18n-keys.js", {
        }]
    ]
}