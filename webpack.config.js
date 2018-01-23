const path = require('path');

module.exports = {
    entry: './index.js',
    devtool: 'inline-source-map',
    output: {
        filename: './js/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    },
                },
                {
                    loader: "sass-loader", // compiles Sass to CSS
                }]
        }]
    }
};