// @ts-nocheck
/***** Archive filename *****
abc210/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [10, 10, 100, 1],

  // [5, 3, 20, 15],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, A, X, Y]] = args

  if (N <= A) return X * N

  return (X * A) + (Y * (N - A))
}
