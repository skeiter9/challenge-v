const webpack = require("webpack");
const srcPath = __dirname;

module.exports = function(config) {
  config.set({

  	frameworks: ['browserify', 'tap'],

  	files: [
      'boot/app.js',
  	  'app_test.js'
  	],

  	preprocessors: {
      'boot/app.js': ['webpack'],
      'app_test.js': ['browserify']
  	},

  	webpack: {
			module: {
				resolve: {
					modulesDirectories: ['mode_modules']
				},
				node: {
  				fs: "empty"
				},
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
	    }
  	},

  	webpackMiddleware: {
  		stats: {
  			colors: true
  		}
  	},
  	reporters: ['tape'],
  	colors: true,
  	autoWatch: true,
  	browsers: ['Chrome'],
  	singleRun: false,
  	plugins: [
			'karma-browserify',
			'karma-webpack',
			'karma-chrome-launcher',
      'karma-tap',
      'karma-tape-reporter'
  	]
  });
};