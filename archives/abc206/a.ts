// @ts-nocheck
/***** Archive filename *****
abc206/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [180]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N]] = args
  const price = Math.floor(N * 1.08);
  if (price < 206) {
    return 'Yay!'
  } else if (price === 206) {
    return 'so-so'
  } else {
    return ':('
  }
}
