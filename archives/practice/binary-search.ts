// @ts-nocheck
/***** Archive filename *****
practice/binary-search
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [24]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N]] = args;
  let ng = 19, ok = 35;
  while ((ok - ng) > 1) {
    let middle = Math.floor((ok - ng) / 2) + ng;
    console.log(middle)
    if (middle < N) {
      ng = middle
    } else {
      ok = middle
    }
  }
  console.log()
  return ok
}
