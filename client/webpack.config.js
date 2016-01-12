const path = require('path');
const srcPath = __dirname;
const buildPath = path.join(srcPath, 'build');

const config = {
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
            }
        ]
    }
};

module.exports = config;

