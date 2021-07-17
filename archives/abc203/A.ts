// @ts-nocheck
/***** Archive filename *****
abc203/A
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [2, 5, 2],
  // [4, 5, 6],
  [1, 1, 1],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[a, b, c]] = args
  if (a === b) return c
  if (b === c) return a
  if (c === a) return b
  return 0
}
