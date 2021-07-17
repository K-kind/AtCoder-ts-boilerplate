// @ts-nocheck
/***** Archive filename *****
abc205/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [3, -4, 3],
  // [-7000000000, 9000000000, 1000000000],


] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[A, B, C]] = args

  if (C % 2 === 0) {
    const AAbs = Math.abs(A)
    const BAbs = Math.abs(B)
    if (AAbs > BAbs) return '>'
    if (AAbs < BAbs) return '<'
    return '='
  } else {
    if (A > B) return '>'
    if (A < B) return '<'
    return '='
  }
}
