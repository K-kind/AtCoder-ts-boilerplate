// @ts-nocheck
/***** Archive filename *****
dp/dp_a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [4],
  // [10, 30, 40, 20],
  // [2],
  // [10, 10],
  [6],
  [30, 10, 60, 10, 60, 50],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], h] = args
  const INF = 10 ** 5
  const dp: number[] = new Array(N)
  dp.fill(INF)

  dp[0] = 0
  dp[1] = Math.abs(h[0] - h[1])
  for (let i = 2; i < N; i++) {
    dp[i] = Math.min(dp[i - 1] + Math.abs(h[i] - h[i - 1]), dp[i - 2] + Math.abs(h[i] - h[i - 2]))
  }
  return dp[N - 1]
}
