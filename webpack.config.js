const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const env = process.env.NODE_ENV || 'development';

const config = {
    entry: {
        App: [
            'webpack/hot/dev-server',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'src', 'app.js')
        ]
    },
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules',
        ]
    },
    resolveLoader: {
        modulesDirectories: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    devServer: {
        contentBase: 'public',
        devtool: 'eval',
        hot: true,
        inline: true,
        port: 8080,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    devtool: 'eval',
    output: {
        path: buildPath,
        publicPath: 'https://localhost:8080/',
        filename: './public/[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env || 'development')
        })
    ],
    externals: {
        fs: 'js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};

module.exports = config;