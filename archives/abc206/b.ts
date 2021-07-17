// @ts-nocheck
/***** Archive filename *****
abc206/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [1]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N]] = args

  let money = 0
  let i = 0
  while (money < N) {
    money += ++i
  }
  return i
}
