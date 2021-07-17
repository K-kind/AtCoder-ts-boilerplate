// @ts-nocheck
/***** Archive filename *****
book/4.2euclid
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

const getGCD = (m: number, n: number): number => {
  const r = m % n
  if (r === 0) return n

  return getGCD(n, r)
}

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  const m = 51, n = 15

  return getGCD(m, n)
}
