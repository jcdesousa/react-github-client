
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  let newConfig = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );

  newConfig = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
  })(config, env);

  return newConfig;
};
