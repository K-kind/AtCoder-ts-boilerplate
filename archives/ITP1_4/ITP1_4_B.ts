// @ts-nocheck
import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'
import { toSignificant } from './utils/to-significant'

/** 引数の例 */
export const exampleArgs = [
  [3],
] as const

/** 解答 */
export default (args: Args): Answer => {
  const [[r]] = args
  const area = toSignificant(r * r * Math.PI)
  const circumstance = toSignificant(r * 2 * Math.PI)
  return `${area} ${circumstance}`
}
