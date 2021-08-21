// @ts-nocheck
/***** Archive filename *****
book/5-napsack
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  const N = 6
  const W = 50
  const weight = [2, 1, 3, 2, 1, 5]
  const value = [3, 2, 6, 1, 3, 85]

  const dp: number[][] = []
  for (let i = 0; i <= N; i++) {
    dp[i] = []
    for (let w = 0; w <= W; w++) {
      dp[i][w] = 0
    }
  }

  for (let i = 0; i < N; i++) {
    for (let w = 0; w <= W; w++) {
      if (w - weight[i] >= 0) {
        const newV = dp[i][w - weight[i]] + value[i]
        if (newV > dp[i + 1][w]) {
          dp[i + 1][w] = newV 
        }
      }
      if (dp[i][w] > dp[i + 1][w]) {
        dp[i + 1][w] = dp[i][w]
      }
    }
  }

  return dp[N][W]
}
