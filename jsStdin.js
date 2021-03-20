process.stdin.resume()
process.stdin.setEncoding('utf8')

const inputLines = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
reader.on('line', (lines) => {
  inputLines.push(lines)
})
reader.on('close', () => {
  const result = getResult(inputLines)
  console.log(result)
})

const getResult = (inputLines) => {
  return inputLines
}
