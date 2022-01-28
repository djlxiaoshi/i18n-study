class WebpackPluginI18N {
    apply(compiler) {
      compiler.hooks.done.tap('WebpackPluginI18N', (
        stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */
      ) => {
        console.log('Hello World!----------');
      });
    }
  }
  module.exports = WebpackPluginI18N;