// @ts-nocheck
/***** Archive filename *****
abc211/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'
import { toSignificant } from './utils/number'

/** Example Arguments */
export const exampleArgs = [
  [300, 50]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[A, B]] = args
  return toSignificant((A - B) / 3) + B
}
