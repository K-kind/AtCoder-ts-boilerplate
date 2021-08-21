// @ts-nocheck
/***** Archive filename *****
abc213/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [6],
  // [1, 123, 12345, 12, 1234, 123456],
  [5],
  [3, 1, 4, 15, 9],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], A] = args
  const AWithI = A.map((a, i) => [a, i + 1])
  AWithI.sort((a, b) => b[0] - a[0])
  return AWithI[1][1]
}
