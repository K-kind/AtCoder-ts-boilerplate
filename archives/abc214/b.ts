// @ts-nocheck
/***** Archive filename *****
abc214/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [1, 0]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[S, T]] = args
  let count = 0
  for (let i = 0; i <= 100; i++) {
    for (let j = 0; j <= 100; j++) {
      for (let k = 0; k <= 100; k++) {
        if (((i + j + k) <= S) && ((i * j * k) <= T)) {
          count++
        }
      }
    }
  }

  return count
}
