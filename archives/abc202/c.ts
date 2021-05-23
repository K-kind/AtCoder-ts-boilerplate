// @ts-nocheck
/***** Archive filename *****
abc202/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [4],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 2, 3, 4],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], A, B, C] = args

  const AArray = new Array(N)
  AArray.fill(0)
  for (let i = 0; i < N; i++) {
    AArray[A[i] - 1]++
  }

  let result = 0
  for (let i = 0; i < N; i++) {
    const BNumber = B[C[i] - 1]
    
    result += AArray[BNumber - 1]
  }
  return result
}
