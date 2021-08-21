// @ts-nocheck
/***** Archive filename *****
abc212/d
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [5],
  [
    [1, 3],
    [1, 5],
    [3],
    [2, 2],
    [3],
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[Q], queries] = args

  let min = Infinity
  let query2Sum = 0
  const result = []
  for (let i = 0; i < Q; i++) {
    const query = queries[i]
    if (query[0] === 1) {
      min = Math.min(min, query[1] + query2Sum)
    } else if (query[0] === 2) {
      query2Sum += query[1]
    } else {
      result.push(min)
    }
  }
  return result
}
