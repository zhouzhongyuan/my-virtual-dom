var path = require('path');

var SERVER_BUILD_DIR = path.resolve(__dirname, 'dist');

const config = {
    target: 'node',
    entry: path.resolve(__dirname, 'example.js'),
    output: {
        path: SERVER_BUILD_DIR,
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    watch: true,
};
module.exports = config;