const path = require('path')
const fs = require('fs')
const clipboardy = require('clipboardy')

const prodFileRelativePath = '../dist/main.prod.js'
const prodFileAbsolutePath = path.resolve(__dirname, prodFileRelativePath)

const prodFileContent = fs.readFileSync(prodFileAbsolutePath, 'utf-8')
clipboardy.writeSync(prodFileContent)
