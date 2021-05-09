// @ts-nocheck
/***** Archive filename *****
abc200/B
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [2021, 4],
  // [40000, 2],
  [8691, 2],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, K]] = args

  let BigN = BigInt(N)

  for (let i = 0; i < K; i++) {
    if (BigN % BigInt(200) === BigInt(0)) {
      BigN = BigN / BigInt(200)
    } else {
      BigN = BigN * BigInt(1000) + BigInt(200)
    }
  }
  return BigN.toString()
}
