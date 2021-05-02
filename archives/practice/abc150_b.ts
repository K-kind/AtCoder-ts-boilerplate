// @ts-nocheck
/***** Archive filename *****
practice/abc150_b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [10],
  ['ZABCDBABCQ']
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[_N], [S]] = args
  const matched = S.match(/ABC/g)
  return matched ? matched.length : 0
}
