// @ts-nocheck
import { Answer } from './lib/log-answer'

/** 標準入力から受け取る引数の型 */
type Args = number[][]

export default (args: unknown): Answer => {
  const typedArgs = args as Args
  const results = typedArgs.reduce<string[]>((acc, numArray, index) => {
    const num = numArray[0]
    if (num != 0) {
      acc.push(`Case ${index + 1}: ${num}`)
    }
    return acc
  }, [])

  return results
}

/** テスト用の引数 */
export const tmpArgs: Args = [
  [3], [5], [11], [7], [8], [19], [0]
]
