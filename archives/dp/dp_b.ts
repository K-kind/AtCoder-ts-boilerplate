// @ts-nocheck
/***** Archive filename *****
dp/dp_b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [5, 3],
  // [10, 30, 40, 50, 20],
  // [3, 1],
  // [10, 20, 10],
  // [2, 100],
  // [10, 10],
  [10, 4],
  [40, 10, 20, 70, 80, 10, 20, 70, 80, 60],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, K], h] = args
  const INF = Infinity
  const dp = new Array<number>(N)
  dp.fill(INF)

  dp[0] = 0

  for (let i = 1; i < N; i++) {
    const leftEdge = i > K ? i - K : 0
    for (let j = leftEdge; j < i; j++) {
      dp[i] = Math.min(dp[i], dp[j] + Math.abs(h[i] - h[j]))
    }
  }
  return dp[N - 1]
}
