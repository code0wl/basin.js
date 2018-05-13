const path = require('path');

const config = {
    entry: './basin',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'basin.min.js'
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [{
            use: 'ts-loader'
        }]
    }
};

module.exports = config;