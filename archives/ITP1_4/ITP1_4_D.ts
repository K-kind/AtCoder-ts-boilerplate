// @ts-nocheck
import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** 引数の例 */
export const exampleArgs = [
  [5],
  [10, 1, 5, 4, 17]
] as const

/** 解答 */
export default (args: Args): Answer => {
  const [, numbers] = args

  const result = {
    min: Infinity,
    max: -Infinity,
    sum: 0
  }

  numbers.forEach((num) => {
    result.min = result.min > num ? num : result.min
    result.max = result.max < num ? num : result.max
    result.sum += num
  })

  return `${result.min} ${result.max} ${result.sum}`
}
