// @ts-nocheck
/***** Archive filename *****
abc205/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'
import { toSignificant } from './utils/to-significant'

/** Example Arguments */
export const exampleArgs = [
  // [45, 200]
  [37, 450],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[A, B]] = args
  const result = toSignificant((A * B / 100), 6)
  return result
}
