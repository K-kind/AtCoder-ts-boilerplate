// @ts-nocheck
/***** Archive filename *****
abc214/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [3],
  // [4, 1, 5],
  // [3, 10, 100],
  // [4],
  // [100, 100, 100, 100],
  // [1, 1, 1, 1],
  // [4],
  // [1, 2, 3, 4],
  // [1, 2, 4, 7],
  [8],
  [84, 87, 78, 16, 94, 36, 87, 93],
  [50, 22, 63, 28, 91, 60, 64, 27],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], S, T] = args
  for (let i = 1; i < N; i++) {
    T[i] = Math.min(T[i], (T[i - 1] + S[i - 1]))
  }
  T[0] = Math.min(T[0], (T[N - 1] + S[N - 1]))
  for (let i = 1; i < N; i++) {
    T[i] = Math.min(T[i], (T[i - 1] + S[i - 1]))
  }
  return T
}
