// @ts-nocheck
/***** Archive filename *****
abc210/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [7, 3],
  // [1, 2, 1, 2, 3, 3, 1],

  // [5, 5],
  // [4, 4, 4, 4, 4],
  [10, 6],
  [304621362, 506696497, 304621362, 506696497, 834022578, 304621362, 414720753, 304621362, 304621362, 414720753],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, K], C] = args

  const targetArray = C.slice(0, K)
  const hash: { [key: number]: number } = {}
  for (let i = 0; i < K; i++) {
    hash[targetArray[i]] ??= 0
    hash[targetArray[i]]++
  }
  let currentSize = new Set(C.slice(0, K)).size
  let max = currentSize
  for (let i = 1; i <= N - K; i++) {
    const removeTarget = C[i - 1]
    hash[removeTarget]--
    if (hash[removeTarget] === 0) {
      currentSize--
    }
    
    const addTarget = C[i + K - 1]
    hash[addTarget] ??= 0
    hash[addTarget]++
    if (hash[addTarget] === 1) {
      currentSize++
    }
    max = Math.max(max, currentSize)
  }
  return max
}
