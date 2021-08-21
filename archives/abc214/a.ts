// @ts-nocheck
/***** Archive filename *****
abc214/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [214]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N]] = args
  if (N <= 125) return 4
  if (N <= 211) return 6
  return 8
}
