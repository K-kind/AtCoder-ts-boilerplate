// @ts-nocheck
/***** Archive filename *****
abc211/c-dp
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  ['chokudaichokudaichokudai']
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[S]] = args

  const C = ['c', 'h', 'o', 'k', 'u', 'd', 'a', 'i']
  const N = S.length
  const mod = 10 ** 9 + 7
  const dp = Array.from({ length: N + 1 }, () => [0, 0, 0, 0, 0, 0, 0, 0, 0])

  for (let i = 0; i < N + 1; i++) {
    dp[i][0] = 1
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < 8; j++) {
      if (S[i] === C[j]) {
        dp[i + 1][j + 1] = (dp[i][j + 1] + dp[i][j]) % mod
      } else {
        dp[i + 1][j + 1] = dp[i][j + 1]
      }
    }
  }

  return dp[N][8]
}
