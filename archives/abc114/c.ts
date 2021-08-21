// @ts-nocheck
/***** Archive filename *****
abc114/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [999999999]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N]] = args
  let count = 0
  const count753 = (n: number, use: number): void => {
    if (n > N) return
    if (use === 0b111) count++

    count753(n * 10 + 7, use | 0b100)
    count753(n * 10 + 5, use | 0b010)
    count753(n * 10 + 3, use | 0b001)
  }

  count753(0, 0)
  return count
}
