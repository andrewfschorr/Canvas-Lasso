import path from 'path';

module.exports = {
    context: __dirname,
    entry: path.resolve(__dirname, 'index.js'),
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    devServer: {
        contentBase: __dirname,
        port: 8000,
    },
};
