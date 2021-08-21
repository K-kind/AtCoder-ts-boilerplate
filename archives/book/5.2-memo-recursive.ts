// @ts-nocheck
/***** Archive filename *****
book/5.2-memo-recursive
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  const N = 8
  const W = 36
  const a = [10, 2, 30, 14, 3, 13, 4, 13]

  const memo: boolean[][] = []
  for (let n = 0; n <= N; n++) {
    memo[n] = []
    for (let w = 0; w <= W; w++) {
      memo[n][w] = false
    }
  }

  const func = (n: number, w: number): boolean => {
    if (n === 0) return w === 0

    if (memo[n][w]) return true

    memo[n][w] = func(n - 1, w) || func(n - 1, w - a[n])
    return memo[n][w]
  }

  const result = func(N, W)
  return result ? 'Yes' : 'No'
}
