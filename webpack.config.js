const path = require('path')
const webpack = require('webpack')

const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'dist')

module.exports = {
    devServer: {
        hot: true,
        port: 9002,
        static: path.join(__dirname, 'dist')
    },
    entry: {
        app: APP_DIR + '/index.tsx',
        vendor: [
            '@redux-saga/core', 'react', 'react-dom', 'react-redux', 'react-router', 'redux'
        ]
    },
    mode: process.env.NODE_ENV || 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            },
            {
                exclude: /node_modules/,
                include: APP_DIR,
                test: /\.(js|jsx|ts|tsx)$/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ]
    },
    output: {
        filename: '[name].prod.js',
        path: BUILD_DIR
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin(),
        new webpack.DefinePlugin({
            config: JSON.stringify(require(path.join(
                __dirname,
                'src',
                'config',
                process.env.NODE_ENV === 'development' ? 'dev.config.js' : 'prod.config.js'
            ))),
            mode: JSON.stringify(process.env.NODE_ENV)
        }),
    ],
    resolve: {
        alias: {
            actions: path.resolve(__dirname, 'src', 'actions'),
            components: path.resolve(__dirname, 'src', 'components'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
            sagas: path.resolve(__dirname, 'src', 'sagas'),
            selectors: path.resolve(__dirname, 'src', 'selectors'),
        },
        extensions: ['.css', '.js', '.jsx', '.json', '.scss', '.ts', '.tsx'],
        modules: ['node_modules']
    }
}
