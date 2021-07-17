// @ts-nocheck
/***** Archive filename *****
abc205/d-retire
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [4, 3],
  [3, 5, 6, 7],
  [
    [2],
    [5],
    [3],
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, Q], A, K] = args
  const C = []
  for (let i = 0; i < N; i++) {
    // C[i] = 
  }
  const AMax = A[A.length - 1]
  const results = []
  for (let i = 0; i < Q; i++) {
    const k = K[i][0]

    if (k >= AMax) {
      results.push(k + N)
    } else if (k < A[0]) {
      results.push(k)
    } else {
      let start = 0
      let end = N - 1
      while (end - start > 1) {
        let middle = Math.floor((end - start) / 2) + start
        console.log(k, middle, A[middle])
        if (A[middle] > k) {
          end = middle
        } else {
          start = middle
        }
      }
      // console.log(k, start, end)
      results.push(k + end)
    }
  }
  return results
}
