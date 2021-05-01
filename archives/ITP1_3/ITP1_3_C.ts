// @ts-nocheck
import { Answer } from './lib/log-answer'

/** 標準入力から受け取る引数の型（必ず2次元配列となる） */
type Args = [number, number][]

export default (args: unknown): Answer => {
  const typedArgs = args as Args

  const sortedNums = typedArgs.map((data) => {
    data.sort((a, b) => a - b)
    return `${data[0]} ${data[1]}`
  })

  sortedNums.pop()
  sortedNums.pop()
  return sortedNums
}

/** テスト用の引数 */
export const tmpArgs: Args = [
  [3, 2],
  [2, 2],
  [5, 3],
  [0, 0]
]
