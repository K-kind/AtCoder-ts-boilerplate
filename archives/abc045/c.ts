// @ts-nocheck
/***** Archive filename *****
abc045/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [125]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[SNum]] = args
  const S = String(SNum)
  const N = S.length

  let sum = 0
  for (let bit = 0; bit < (1 << (N - 1)); bit++) {
    let currentNum = Number(S[0])
    for (let i = 0; i < (N - 1); i++) {
      if (bit & (1 << i)) {
        sum += currentNum
        currentNum = Number(S[i + 1])
      } else {
        currentNum = (currentNum * 10) + Number(S[i + 1])
      }
    }
    sum += currentNum
  }
  return sum
}
