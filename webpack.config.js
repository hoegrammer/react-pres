var path = require('path');

var sassLoaders = [
  'style',
  'css',
  'autoprefixer?browsers=last 2 version'
];

module.exports = {
	entry: './index.js',
	devtool: 'source-map',
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{ 
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: sassLoaders.join("!")
			}
		]
  },
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
  },
	resolveLoader: {
			root: path.join(__dirname, 'node_modules')
	}
};
