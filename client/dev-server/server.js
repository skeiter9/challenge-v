var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? 8081 : 3001;
var publicDir = path.resolve(__dirname, '../public');

app.use(express.static(publicDir));

if (!isProduction) {

  var bundle = require('./webpack-dev-server.js');

  bundle();

  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:' + (process.env.PORT || 8081)
    });
  });
  /*
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpack = require('webpack');

  var compiler = webpack(require('../webpack.config.js'));

  app.use(webpackDevMiddleware(compiler, {
    contentBase: 'public/',
    publicPath: '/build/',

    hot: true,

    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  }));
  var bundleStart;

  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });
  */
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function() {
  console.log('server is running on port ' + port);
});
