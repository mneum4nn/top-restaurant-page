const path = require('path');
HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',

    entry: {
        boxes:'./src/boxes.js',
        index:'./src/index.js',

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
    module:{
        rules:[
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
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
