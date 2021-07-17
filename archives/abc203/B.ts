// @ts-nocheck
/***** Archive filename *****
abc203/B
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [1, 2],
  [3, 3],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, K]] = args
  let result = 0
  for (let i = 1; i < N + 1; i++) {
    for (let k = 1; k < K + 1; k++) {
      result += (i * 100 + k)
    }
  }
  return result
}
