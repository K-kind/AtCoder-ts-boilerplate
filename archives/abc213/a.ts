// @ts-nocheck
/***** Archive filename *****
abc213/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [3, 6],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[A, B]] = args
  return A ^ B
}
