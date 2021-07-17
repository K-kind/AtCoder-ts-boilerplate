// @ts-nocheck
/***** Archive filename *****
abc205/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [5],
  // [3, 1, 2, 4, 5],
  // [6],
  // [3, 1, 4, 1, 5, 2],
  [1],
  [1]

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], A] = args
  A.sort((a, b) => a - b)
  let result = 'Yes'
  for (let i = 0; i < N; i++) {
    if (A[i] !== i + 1) {
      result = 'No'
      break
    }
  }
  return result
}
