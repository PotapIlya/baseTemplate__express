const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    target: 'node',
    mode :'development',
    watch : false,
    node: {
        __dirname: false,
        __filename: false,
    },
    context: path.resolve(__dirname, './'),
    entry: [ './server.ts' ],
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
        extensions: ['.ts', '.js'],
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
