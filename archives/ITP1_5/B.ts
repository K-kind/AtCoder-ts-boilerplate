// @ts-nocheck
/***** Archive filename *****
ITP1_5/B
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [
    [3, 4],
    [5, 6],
    [3, 3],
    [0, 0],
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [nums] = args
  return nums.reduce((joinedStr, [H, W]) => {
    if (H === 0 || W === 0) return joinedStr

    for (let i = 0; i < H; i++) {
      if (i === 0 || i === H - 1) {
        for (let j = 0; j < W; j++) {
          joinedStr += '#'
        }
      } else {
        for (let j = 0; j < W; j++) {
          const str = j === 0 || j === W - 1 ? '#' : '.'
          joinedStr += str
        }
      }
      joinedStr += '\n'
    }
    return joinedStr + '\n'
  }, '')
}
