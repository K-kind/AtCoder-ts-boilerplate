// @ts-nocheck
/***** Archive filename *****
abc207/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [3, 4, 5]
  [99, 99, 98],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [nums] = args
  nums.sort()
  return nums[1] + nums[2]
}
