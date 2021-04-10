const path = require('path')

const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'
const entryFilename = isDevelopment ? 'main.dev' : 'main.prod'

module.exports = {
  entry: path.join(__dirname, 'src', `${entryFilename}.ts`),
  output: {
    filename: `${entryFilename}.js`,
    path: path.join(__dirname, 'dist')
  },
  devtool: isDevelopment ? 'inline-source-map' : false,
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
}
