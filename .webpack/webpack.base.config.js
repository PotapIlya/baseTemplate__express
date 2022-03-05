const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
        extensions: ['.ts', '.js'],
    },
    target: 'node',
    context: path.resolve(__dirname, './../'),
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: [ './server.ts' ],
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode :'development',
    watch : false,
    externals: [
        nodeExternals()
    ]
};


// const resolve = require('path').resolve
// const path = require('path')
//
//
// module.exports = {
//     target: 'node',
//     node: {
//         __dirname: false,
//         __filename: false,
//     },
//     entry: [ './server.ts' ],
//     output: {
//         filename: "app.js",
//         path: resolve(__dirname, './../dist')
//     },
//     // ts
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     resolve: {
//         // extensions: ['.tsx', '.ts', '.js'],
//         alias: {
//             '@': resolve('./'),
//
//         },
//         extensions: ['.ts'],
//     },
// }
