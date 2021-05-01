// @ts-nocheck
import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** 引数の例 */
export const exampleArgs = [
  [2, 100000009],
] as const

/** 解答 */
export default (args: Args): Answer => {
  const [[a, b]] = args
  const quotient = Math.round((a / b) * 10 ** 5) / (10 ** 5)
  const d = Math.floor(quotient)
  const remainder = a % b
  return `${d} ${remainder} ${quotient}`
}
