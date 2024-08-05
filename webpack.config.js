const path = require('path');

module.exports = {
    mode: 'development', // Adicione esta linha para definir o modo de desenvolvimento
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true,
        },
        compress: true,
        port: 8080,
        open: true,
        historyApiFallback: true // Isso garante que o index.html será mostrado
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
