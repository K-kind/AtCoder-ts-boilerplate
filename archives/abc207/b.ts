// @ts-nocheck
/***** Archive filename *****
abc207/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [5, 2, 3, 2],
  [6, 9, 2, 3],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[A, B, C, D]] = args
  // let count = 0

  // while (count < 100001) {
  //   if ((A + B * count) <= C * count * D) {
  //     break
  //   } else {
  //     count++
  //   }
  // }
  // return count < 100000 ? count : -1
  
  const count = Math.ceil(-A / (B - C * D))
  return count > 0 ? count : -1
}
