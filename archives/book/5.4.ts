// @ts-nocheck
/***** Archive filename *****
book/5.4
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  const a = [4, 3, 10, 12, 5]
  const N = a.length
  const W = 22
  const K = 4

  const dp: number[][] = []

  // for (let i = 0; i < N + 1; i++) {
  //   dp[i] = []
  //   for (let j = 0; j < W + 1; j++) {
  //     dp[i][j] = Infinity
  //   }
  // }
  // dp[0][0] = 0
  for (let i = 0; i < N + 1; i++) {
    dp[i] = []
    for (let j = 0; j < W + 1; j++) {
      if (j === 0) {
        dp[i][j] = 0
      } else {
        dp[i][j] = Infinity
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= W; j++) {
      // iを選ばない時
      dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j])

      // iを選ぶ時
      if (j >= a[i]) {
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j - a[i]] + 1)
      }
    }
  }

  const result = dp[N][W] <= K
  return result ? 'Yes' : 'No'
}
