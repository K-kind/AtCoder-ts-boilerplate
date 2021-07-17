// @ts-nocheck
/***** Archive filename *****
abc204/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [4],
  [8, 9, 10, 11],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], As] = args

  return As.reduce((accum, A) => {
    if (A <= 10) return accum

    return accum + A - 10
  }, 0)
}
