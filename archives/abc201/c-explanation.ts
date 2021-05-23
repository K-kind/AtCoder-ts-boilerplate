// @ts-nocheck
/***** Archive filename *****
abc201/c-explanation
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // ['o?????xxxx'],
  // ['o?oo?oxoxo'],
  ['xxxxx?xxxo'],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[S]] = args

  let ans = 0
  for (let i = 0; i < 10000; i++) {
    const flags: boolean[] = new Array(10)
    flags.fill(false)
    let now = i
    for (let j = 0; j < 4; j++) {
      flags[now % 10] = true
      now = Math.floor(now / 10)
    }

    let flag2 = true
    for (let j = 0; j < 10; j++) {
      if (S[j] === 'o' && !flags[j]) {
        flag2 = false
      } else if (S[j] === 'x' && flags[j]) {
        flag2 = false
      }
    }

    if (flag2) {
      ans++
    }
  }

  return ans
}
