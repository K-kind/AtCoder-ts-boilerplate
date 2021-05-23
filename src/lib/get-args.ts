import fs from 'fs'
import { exampleArgs } from '../my-answer'

/** 標準入力から受け取った引数を型キャストしたものを返す */
export default () => {
  const linesStr = getLines()
  return parseLines(linesStr, exampleArgs)
}

const getLines = () => {
  return fs.readFileSync('/dev/stdin', 'utf8')
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

/** 固定行数の列 */
type FixedItems = readonly (number | string)[]
/** 任意行数の列の配列 */
type FluctuateItems = readonly FixedItems[]
/** 全ての引数のパターン（型キャスト時に使用） */
type WritableArgs = (FixedItems | FluctuateItems)[]

/** タプル型にするためにconst assersionした引数の型 */
type ConstArgs = typeof exampleArgs

/** 中身までliteralになった部分をnumber型等に戻す */
type ShallowTuple<T> = {
  -readonly [P in keyof T]:
    T[P] extends FixedItems
    ? T[P] extends readonly string[] ? string[] : number[]
    : T[P] extends readonly (readonly string[])[] ? string[][] : number[][]
}
/** 引数の型の中身をliteralからnumbers等に戻した型 */
export type Args = ShallowTuple<ConstArgs>

const parseLines = (linesStr: string, exampleArgs: ConstArgs) => {
  const lines = linesStr.trim().split('\n')
  const parsedLines: WritableArgs = []
  // @ts-ignore
  exampleArgs.forEach(([firstExampleOfLine], exampleIndex) => {
    // 固定の各行をキャストして格納
    if (typeof firstExampleOfLine === 'number') {
      parsedLines.push(splitToNumbers(lines[exampleIndex]))
      return
    }
    if (typeof firstExampleOfLine === 'string') {
      parsedLines.push(splitToStrings(lines[exampleIndex]))
      return
    }
    if (!Array.isArray(firstExampleOfLine)) {
      throw new Error('Error: unexpected example arg types')
    }

    // 任意行数の各行をキャストして1つの配列に格納
    const manyLines = lines.slice(exampleIndex)
    if (typeof firstExampleOfLine[0] === 'number') {
      parsedLines.push(manyLines.map(splitToNumbers))
      return
    }
    if (typeof firstExampleOfLine[0] === 'string') {
      parsedLines.push(manyLines.map(splitToStrings))
      return
    }
  })

  return parsedLines as Args
}

/** 'A B C ' => ['A', 'B', 'C'] */
const splitToStrings = (lineStr: string) => {
  return lineStr.trim().split(' ')
}

/** '1 2 3 ' => [1, 2, 3] */
const splitToNumbers = (lineStr: string) => {
  return lineStr.trim().split(' ').map(Number)
}
