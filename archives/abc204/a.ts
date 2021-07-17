// @ts-nocheck
/***** Archive filename *****
abc204/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [1, 2]

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[x, y]] = args
  if (x === y) return x
  if (x === 0 && y === 1) return 2
  if (x === 0 && y === 2) return 1
  if (x === 1 && y === 0) return 2
  if (x === 1 && y === 2) return 0
  if (x === 2 && y === 0) return 1
  if (x === 2 && y === 1) return 0
  return 0
}
