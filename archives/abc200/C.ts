// @ts-nocheck
/***** Archive filename *****
abc200/C
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [6],
  // [123, 223, 123, 523, 200, 2000]
  // [5],
  // [1, 2, 3, 4, 5]
  [8],
  [199, 100, 200, 400, 300, 500, 600, 200]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], A] = args

  const remainders: number[] = new Array(200)
  remainders.fill(0)
  for (let i = 0; i < N; i++) {
    const remainder = A[i] % 200
    remainders[remainder]++
  }

  return remainders.reduce((sum, current) => {
    return sum + (current * (current - 1) / 2)
  }, 0)
}
