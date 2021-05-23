// @ts-nocheck
/***** Archive filename *****
abc201/a
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'


/** Example Arguments */
export const exampleArgs = [
  [1, 4, 3]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [nums] = args
  nums.sort((a, b) => a - b)

  return nums[1] - nums[0] === nums[2] - nums[1] ? 'Yes' : 'No'
}
