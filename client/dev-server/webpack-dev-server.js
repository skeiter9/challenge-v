var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.js');
var port = process.env.PORT || 8081;

if (process.env.STANDALONE) bundleServer();
else module.exports = bundleServer;

function bundleServer() {

  var bundleStart;
  var compiler = Webpack(webpackConfig);

  var bundler = new WebpackDevServer(compiler, {
    contentBase: 'public/',
    publicPath: '/build/',

    hot: true,

    quiet: false,
    noInfo: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  });

  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  bundler.listen(port, 'localhost', function() {
    console.log('webpack-dev-server is running on ' + port + ' port' +
      '\nBundling project, please wait...');
  });

};
