import readline from 'readline'

export default () => {
  return new Promise<string[]>((resolve) => {
    process.stdin.resume()
    process.stdin.setEncoding('utf8')
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    const inputLines: string[] = []
    reader.on('line', (lines) => {
      inputLines.push(lines)
    })
    reader.on('close', () => {
      resolve(inputLines)
    })
  })
}
