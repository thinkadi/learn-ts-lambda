const path = require('path');

module.exports = {
    entry: {
        server: './server.ts'
    },
    resolve: { extensions: ['.js', '.ts'] },
    mode: 'none',
    target: 'node',
    output: {
        path: path.join(__dirname, `dist/`),
        filename: '[name].js'
    }
    // module: {
    //     rules: [
    //         { test: /\.ts$/, loader: 'ts-loader' }
    //     ]
    // }
};