// @ts-nocheck
/***** Archive filename *****
book/2.5
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  const n = Math.floor(1023 * Math.random())
  const age = Math.floor(n * Math.random())

  let ng = 0
  let ok = n
  let count = 0
  while (ok - ng > 1) {
    count++
    const middle = Math.floor((ok - ng) / 2) + ng
    if (middle >= age) {
      ok = middle
    } else {
      ng = middle
    }
  }
  return JSON.stringify({ ok, age, n, count, countPow: 2 ** count })
}
