// @ts-nocheck
/***** Archive filename *****
abc209/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [10, 10]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[A, B]] = args
  return A > B ? 0 : B - A + 1
}
