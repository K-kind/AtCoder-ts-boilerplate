// @ts-nocheck
/***** Archive filename *****
abc203/C-ANS
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [2, 3],
  // [
  //   [2, 1],
  //   [5, 10],
  // ]
  [5, 1000000000],
  [
    [1, 1000000000],
    [2, 1000000000],
    [3, 1000000000],
    [4, 1000000000],
    [5, 1000000000],
  ]
  // [3, 2],
  // [
  //   [5, 5],
  //   [2, 1],
  //   [2, 2],
  // ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  let [[N, K], ABs] = args
  const sortedABs = ABs.sort(([a], [b]) => a - b)

  for (let i = 0; i < N; i++) {
    const [A, B] = sortedABs[i]
    if (A > K) break
    K += B
  }

  return K
}
