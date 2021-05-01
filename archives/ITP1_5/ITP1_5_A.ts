// @ts-nocheck
import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** 引数の例 */
export const exampleArgs = [
  [
    [3, 4],
    [5, 6],
    [2, 2],
    [0, 0],
  ]
] as const

/** 解答 */
export default (args: Args): Answer => {
  const [rectInfos] = args
  return rectInfos.reduce((accum, [height, width]) => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        accum += '#'
      }
      accum += '\n'
    }
    accum += '\n'
    return accum
  }, '')
}
