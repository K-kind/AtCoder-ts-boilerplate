// @ts-nocheck
/***** Archive filename *****
abc209/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [2, 3],
  // [4, 10],
  // [3, 3, 4, 4],
  [8, 30],
  [3, 1, 4, 1, 5, 9, 2, 6],


] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, X], A] = args
  const sum = A.reduce((accum, current, index) => {
    return accum + (index % 2 === 1 ? current - 1 : current)
  }, 0)
  return X >= sum ? 'Yes' : 'No'
}
