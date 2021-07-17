// @ts-nocheck
/***** Archive filename *****
ITP1_5/C
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [
    [3, 4],
    [5, 6],
    [3, 3],
    [2, 2],
    [1, 1],
    [0, 0],
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [nums] = args
  return nums.reduce((joinedStr, [H, W]) => {
    if (H === 0 || W === 0) return joinedStr

    for (let i = 0; i < H; i++) {
      const HisEven = i % 2 === 0
      for (let j = 0; j < W; j++) {
        const WisEven = j % 2 === 0
        const str = HisEven === WisEven ? '#' : '.'
        joinedStr += str
      }
      joinedStr += '\n'
    }
    return joinedStr + '\n'
  }, '')
}
