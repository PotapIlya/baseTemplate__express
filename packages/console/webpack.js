const resolve = require('path').resolve


module.exports = {
    target: 'node',
    mode: 'development',
    watch: true,
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: './packages/console/index.ts',
    output: {
        filename: "index.js",
        path: resolve(__dirname, './')
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
    externals: [
        function(context, request, callback) {
            if(request[0] === '.') {
                callback();
            } else {
                callback(null, "require('" + request + "')");
            }
        }
    ]
}
