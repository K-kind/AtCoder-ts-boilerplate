// @ts-nocheck
/***** Archive filename *****
abc208/b-modified
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [10000000]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[P]] = args

  const yens: number[] = [1]
  for (let i = 1; i < 10; i++) {
    yens.push(yens[i - 1] * (i + 1))
  }

  let currentP = P
  let count = 0
  for (let i = 9; i >= 0; i--) {
    const yen = yens[i]
    while (yen <= currentP) {
      count++
      currentP -= yen
    }
  }
  return count
}
