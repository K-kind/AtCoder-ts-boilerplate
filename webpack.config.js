const path = require('path');
module.exports = {
  entry: {
    'main.dev': path.join(__dirname, 'src', 'main.dev.ts'),
    'main.prod': path.join(__dirname, 'src', 'main.prod.ts')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  target: 'node',
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
};
