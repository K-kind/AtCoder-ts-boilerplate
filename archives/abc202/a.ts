// @ts-nocheck
/***** Archive filename *****
abc202/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [1, 4, 3],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[a, b, c]] = args
  return 7 - a + 7 - b + 7 - c
  return 'answer'
}
