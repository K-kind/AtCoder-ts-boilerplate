// @ts-nocheck
/***** Archive filename *****
abc212/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [100, 2]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[A, B]] = args

  if (A === 0) return 'Silver'
  if (B === 0) return 'Gold'
  return 'Alloy'
}
