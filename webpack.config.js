const path = require('path');
HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',

    entry: {
        boxes:'./src/boxes.js',
        delivery:'./src/delivery.js',
        menu:'./src/menu.js',
        index:'./src/index.js',

    },

    devtool: 'inline-source-map',

    devServer:{
        static:[
            path.resolve(__dirname,'src'),
            path.resolve(__dirname,'menu-items')
        ]
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
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
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
