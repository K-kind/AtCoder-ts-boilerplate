// @ts-nocheck
/***** Archive filename *****
book/3.6
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  const K = 2
  const S = 2

  let count = 0
  for (let x = 0; x <= K; x++) {
    for (let y = 0; y <= K; y++) {
      const z = S - (x + y)
      if ((z >= 0) && (z <= K)) count++
    }
  }

  return count
}
