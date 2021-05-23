const clipboardy = require('clipboardy')

const fixedLinesNum = process.argv[2] ? Number(process.argv[2]) : undefined
/***************** 引数の整形・キャスト *****************
固定行数を受け取る場合: fixedLinesNum => 2 | undefined
TEST1 TEST2
1 2 3
=> `
  ['TEST1', 'TEST2'],
  [1, 2, 3],
`

固定行数 + 任意行数の場合: fixedLinesNum => 1
TEST1 TEST2
1 2 3
4 5 6
7 8 9
…
=> `
  ['TEST1', 'TEST2'],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
`
******************************************************/

/**
 * TEST1 TEST2
 * 1 2 3
 * 4 5 6
 * 7 8 9
 * => ['TEST1 TEST2', '1 2 3', '4 5 6', '7 8 9']
 */
const getRawLines = () => {
  const rawData = clipboardy.readSync()
  return rawData.trim().split('\n')
}

/**
 * ['TEST1 TEST2', '1 2 3', '4 5 6', '7 8 9'] => [["'TEST1'", "'TEST2'"], [1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * @param {string[]} rawLines 
 * @returns {(string[] | number[])[]}
 */
const parseLines = (rawLines) => {
  return rawLines.map((lineStr) => {
    const isStringArray = /[^(\d|\-|\s)]/.test(lineStr)
    const dataArray = lineStr.trim().split(' ')
    return dataArray.map((data) => isStringArray ? `'${data}'` : Number(data))
  })
}

/**
 * [["'TEST1'", "'TEST2'"], [1, 2, 3], [4, 5, 6], [7, 8, 9]] => [["'TEST1'", "'TEST2'"], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]]
 * @param {(string[] | number[])[]} parsedLines 
 * @param {number | undefined} fixedLinesNum 
 * @returns {(string[] | number[] | (string[] | number[])[])[]}
 */
const structuralizeLines = (parsedLines, fixedLinesNum) => {
  if (fixedLinesNum == undefined) return parsedLines

  const arbitraryLengthLines = parsedLines.splice(fixedLinesNum)
  return [
    ...parsedLines,
    arbitraryLengthLines
  ]
}

/**
 * ["'TEST1'", "'TEST2'"] => "  ['TEST1', 'TEST2'],\n"
 * @param {(string[] | number[])} array 
 * @param {number} indent 
 * @returns {string}
 */
const arrayToIndentedString = (array, indent) => {
  const indentString = [...Array(indent)].reduce((prev, current) => {
    return prev += ' '
  }, '')
  return indentString + '[' + array.join(', ') + '],\n'
}

/**
 * [["'TEST1'", "'TEST2'"], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]] =>
 * `
 *    ['TEST1', 'TEST2'],
 *    [
 *      [1, 2, 3],
 *      [4, 5, 6],
 *      [7, 8, 9],
 *    ]
 * `
 * @param {(string[] | number[] | (string[] | number[])[])[]} structuralizedLines 
 * @returns {string}
 */
const toResultString = (structuralizedLines) => {
  return structuralizedLines.reduce((result, lines) => {
    if (Array.isArray(lines[0])) {
      result += '  [\n'
      for (const line of lines) {
        result += arrayToIndentedString(line, 4)
      }
      result += '  ]'
    } else {
      result += arrayToIndentedString(lines, 2)
    }
    return result
  }, '')
}

/**
 * @param {string} value
 * @returns {void}
 */
const writeToClipBoard = (value) => {
  clipboardy.writeSync(value)
}

const main = () => {
  const rawLines = getRawLines()
  const parsedLines = parseLines(rawLines)
  const structuralizedLines = structuralizeLines(parsedLines, fixedLinesNum)
  const resultString = toResultString(structuralizedLines)
  writeToClipBoard(resultString)
}

main()
