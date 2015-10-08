var path = require('path');

var sassLoaders = [
  'style',
  'css',
  'autoprefixer?browsers=last 2 version'
];

module.exports = {
    entry: './index.js',
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
                test: /\.css$/,
                loader: sassLoaders.join("!")
            }
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }
};