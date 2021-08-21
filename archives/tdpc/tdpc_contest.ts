// @ts-nocheck
/***** Archive filename *****
tdpc/tdpc_contest
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [3],
  [2, 3, 5]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], p] = args
  const W = 100 * 100
  const dp: boolean[][] = []
  for (let i = 0; i <= N; i++) {
    dp[i] = []
    for (let j = 0; j <= W; j++) {
      dp[i][j] = false
    }
  }

  dp[0][0] = true
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= W; j++) {
      if (dp[i][j]) {
        dp[i + 1][j] = true
      }

      if (j >= p[i] && dp[i][j - p[i]]) {
        dp[i + 1][j] = true
      }
    }
  }

  let result = 0
  for (let i = 0; i < W; i++) {
    if (dp[N][i]) result++
  }
  return result
}
