// @ts-nocheck
import { Answer } from './lib/log-answer'

/** 標準入力から受け取る引数の型（必ず2次元配列となる） */
type Args = number[][]

export default (args: unknown): Answer => {
  const typedArgs = args as Args
  const [[N], As, Bs] = typedArgs

  const minMax = { min: 1, max: 1000 }
  for (let i = 0; i < N; i++) {
    const currentA = Number(As[i])
    const currentB = Number(Bs[i])
    minMax.min= currentA >= minMax.min ? currentA : minMax.min
    minMax.max= currentB <= minMax.max ? currentB : minMax.max
  }

  if (minMax.min > minMax.max) return 0

  return minMax.max - minMax.min + 1
}

/** テスト用の引数 */
export const tmpArgs: Args = [
  [3],
  [3, 2, 5],
  [6, 9, 8]
]
