// @ts-nocheck
/***** Archive filename *****
dp/dp_c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [3],
  // [
  //   [10, 40, 70],
  //   [20, 50, 80],
  //   [30, 60, 90],
  // ]
  // [1],
  // [
  //   [100, 10, 1],
  // ]
  [7],
  [
    [6, 7, 8],
    [8, 8, 3],
    [2, 5, 2],
    [7, 8, 6],
    [4, 6, 8],
    [2, 3, 4],
    [7, 5, 1],
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], ABCs] = args

  const dp = new Array<number[]>(N)

  for (let i = 0; i < N; i++) {
    dp[i] = []
    for (let j = 0; j < 3; j++) {
      dp[i][j] = 0
    }
  }

  dp[0] = ABCs[0]

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (j === k) continue
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + ABCs[i][j])
      }
    }
  }

  return Math.max(...dp[N - 1])
}
