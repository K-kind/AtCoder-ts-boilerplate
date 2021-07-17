// @ts-nocheck
/***** Archive filename *****
abc206/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [20],
  // [7, 8, 1, 1, 4, 9, 9, 6, 8, 2, 4, 1, 1, 9, 5, 5, 5, 3, 6, 4],

  [3],
  [1, 7, 1],


  // [10],
  // [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], A] = args
  const dups: { [key: number]: number } = {}
  A.sort()
  for (let i = 1; i < N; i++) {
    if (A[i - 1] === A[i]) {
      dups[A[i]] = dups[A[i]] ? dups[A[i]] + 1 : 1
    }
  }
  const dupAs = Object.values(dups)
  let dupSum = 0
  for (let i = 0, length = dupAs.length; i < length; i++) {
    dupSum += dupAs[i] * (dupAs[i] + 1) / 2
  }
  const sum = (N - 1) * N / 2
  return sum - dupSum
}
