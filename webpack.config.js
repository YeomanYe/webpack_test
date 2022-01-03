const path = require('path');
module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.less/,
                use: [
                    {loader: path.resolve('./custom-loader2')},
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'},
                    {loader: path.resolve('./custom-loader')}
                ]
            },
        ]
    }
}