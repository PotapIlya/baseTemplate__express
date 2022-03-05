const resolve = require('path').resolve


module.exports = {
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: [ './index.ts' ],
    output: {
        filename: "app.js",
        path: resolve(__dirname, './../dist')
    },
    // ts
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // extensions: ['.tsx', '.ts', '.js'],
        extensions: ['.ts'],
    },
}
