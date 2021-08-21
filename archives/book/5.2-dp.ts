// @ts-nocheck
/***** Archive filename *****
book/5.2-dp
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

  const dp: boolean[][] = []
  for (let n = 0; n <= N; n++) {
    dp[n] = []
    for (let w = 0; w <= W; w++) {
      dp[n][w] = false
    }
  }

  dp[0][0] = true
  for (let n = 0; n < N; n++) {
    for (let w = 0; w <= W; w++) {
      if (dp[n][w]) {
        dp[n + 1][w] = true
      }

      if (w >= a[n] && dp[n][w - a[n]]) {
        dp[n + 1][w] = true
      }
    }
  }

  return dp[N][W] ? 'Yes' : 'No'
}
