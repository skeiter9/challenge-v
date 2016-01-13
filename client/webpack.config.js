const path = require('path');
const webpack = require('webpack');

const srcPath = __dirname;
const buildPath = path.join(srcPath, 'build');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const env = process.env.NODE_ENV || 'development';

const config = {
    context: __dirname,
    entry: {
        app: "./app.js"
    },
    output: {
        path: buildPath,
        filename: "[name].bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
              cacheDirectory: true,
              presets: ['es2015', 'stage-2']
          },
          include: [srcPath],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css' ,'postcss'],
          include: [srcPath],
          exclude: /node_modules/
        },
        {
          test: /\.jade$/,
          loaders: ['jade'],
          include: [srcPath],
          exclude: /node_modules/
        },
        {
          test: /\.(eot|ttf|svg|woff|woff2)$/,
          loaders: ['url?limit=40000&name=[name].[ext]'],
          include: [srcPath]
        }
      ]
    },
    postcss: function(webpack) {
      return [
        require('postcss-import')({
          addDependencyTo: webpack
        }),
        require('postcss-alias')(),
        require('postcss-custom-properties')(),
        require('postcss-extend')(),
        require('autoprefixer')(),
        require('postcss-nesting')()
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __ENV__: JSON.stringify(env)
      })
    ]
};

if (env === 'development') {
  config.plugins.push(new LiveReloadPlugin({
    appendScriptTag: true
  }));
}

module.exports = config;
