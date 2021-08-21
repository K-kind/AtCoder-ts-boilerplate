// @ts-nocheck
/***** Archive filename *****
abc212/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [2, 2],
  // [4, 9],
  // [60, 100],
  [1, 8],
  [2],
  [3, 39, 67, 4, 45, 35, 22, 24],
  // [6, 8],
  // [82, 76, 82, 82, 71, 70],
  // [17, 39, 67, 2, 45, 35, 22, 24],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, M], A, B] = args
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b)

  let result = Infinity
  for (let i = 0; i < N; i++) {
    const target = A[i]
    let min = 0
    let max = M - 1
    while (max - min > 1) {
      let mid = Math.floor((min + max) / 2)
      if (B[mid] < target) {
        min = mid
      } else {
        max = mid
      }
    }
    result = Math.min(result, Math.abs(target - B[min]), Math.abs(B[max] - target))
  }
  return result
}
