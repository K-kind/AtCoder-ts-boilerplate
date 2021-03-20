const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'lib', 'main.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js'
    },
    target: 'node'
};
