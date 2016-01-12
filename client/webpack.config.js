const path = require('path');
const srcPath = __dirname;
const buildPath = path.join(srcPath, 'build');
const LiveReloadPlugin = require('webpack-livereload-plugin');

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
            }
        ]
    },
    postcss: function(a) {
        return [
            require('postcss-custom-properties')(),
            require('autoprefixer')(),
            require('postcss-nesting')()
        ]
    },
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true
        })
    ]
};

module.exports = config;

