// @ts-nocheck
/***** Archive filename *****
abc200/A
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [1],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N]] = args

  return Math.ceil(N / 100)
}
