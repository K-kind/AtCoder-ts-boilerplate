// @ts-nocheck
/***** Archive filename *****
abc208/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [100, 600]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[A, B]] = args

  const min = A
  const max = A * 6
  const result = (B >= min) && (B <= max) ? 'Yes' : 'No'
  return result
}
