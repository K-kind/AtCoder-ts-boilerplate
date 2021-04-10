const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'src', 'main.ts'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js'
    },
    target: 'node',
    module: {
      rules: [{
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }]
    }
};
