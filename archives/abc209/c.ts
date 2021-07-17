// @ts-nocheck
/***** Archive filename *****
abc209/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [2],
  // [1, 3],
  // [4],
  // [3, 3, 4, 4],
  // [3],
  // [1, 3, 9999]
  // [4], [1, 3, 6, 9],
  [10],
  [999999917, 999999914, 999999923, 999999985, 999999907, 999999965, 999999914, 999999908, 999999951, 999999979],


] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], C] = args
  const DIVIDER = BigInt(1000000007)
  C.sort()

  let result = BigInt(1)
  for (let i = 0; i < N; i++) {
    if (C[i] - i <= 0) return 0
    const num = Math.max(0, C[i] - i)
    result = (result * BigInt(num)) % DIVIDER
  }
  return Number(result)
}
