import fs from 'fs'
import { exampleArgs } from '../my-answer'

/** 標準入力から受け取った引数を型キャストしたものを返す */
export default () => {
  const lines = getLines()
  return castItems(lines, exampleArgs)
}

const getLines = () => {
  const linesStr = fs.readFileSync('/dev/stdin', 'utf8')
  return linesStr.trim().split('\n')
}

/******************* 引数のキャスト *******************
固定行数を受け取る場合
TEST
1 2 3
=> [['TEST'], [1, 2, 3]]

固定行数 + 任意行数の場合
TEST
1 2 3
4 5 6
7 8 9
…
=> [['TEST'], [[1, 2, 3], [4, 5, 6], [7, 8, 9], ...]]
******************************************************/
/** キャストされた引数 */
export type Args = readonly (
  readonly (number | string)[]
  | readonly (readonly (number | string)[])[]
)[]

type NotReadonlyArgs = (
  (number | string)[]
  | (number | string)[][]
)[]

const castItems = <T extends Args>(lines: string[], exampleArgs: T): T => {
  const castLines: NotReadonlyArgs = []
  exampleArgs.forEach(([firstExampleOfLine], exampleIndex) => {
    // 固定の各行をキャストして格納
    if (typeof firstExampleOfLine === 'number') {
      castLines.push(splitToNumbers(lines[exampleIndex]))
      return
    }
    if (typeof firstExampleOfLine === 'string') {
      castLines.push(splitToStrings(lines[exampleIndex]))
      return
    }
    if (!Array.isArray(firstExampleOfLine)) {
      throw new Error('Error: unexpected example arg types')
    }

    // 任意行数の各行をキャストして1つの配列に格納
    const manyLines = lines.slice(exampleIndex)
    if (typeof firstExampleOfLine[0] === 'number') {
      castLines.push(manyLines.map(splitToNumbers))
      return
    }
    if (typeof firstExampleOfLine[0] === 'string') {
      castLines.push(manyLines.map(splitToStrings))
      return
    }
  })

  return castLines as unknown as T
}

/** 'A B C ' => ['A', 'B', 'C'] */
const splitToStrings = (lineStr: string) => {
  return lineStr.trim().split(' ')
}

/** '1 2 3 ' => [1, 2, 3] */
const splitToNumbers = (lineStr: string) => {
  return lineStr.trim().split(' ').map(Number)
}
