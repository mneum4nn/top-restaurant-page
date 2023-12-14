const path = require('path');
HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',

    entry: {
        index:'./src/index.js',
        boxes:'./src/boxes.js'
    },

    devtool: 'inline-source-map',

    devServer:{
        static:'./dist',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },

    plugins : [
        new HtmlWebpackPlugin( {
            title:'Development',
            filename:'index.html',
            inject: 'body',
            template:'./src/index.html',
        }),
    ],
    optimization:{
        runtimeChunk:'single',
    },
};
