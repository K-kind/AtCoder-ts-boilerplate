// @ts-nocheck
import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** 引数の例 */
export const exampleArgs = [[
  ['1', '+', '2'],
  ['56', '-', '18'],
  ['13', '*', '2'],
  ['100', '/', '10'],
  ['27', '+', '81'],
  ['0', '?', '0']
]] as const

/** 解答 */
export default (args: Args): Answer => {
  const results = []
  for (const [a, op, b] of args[0]) {
    if (op === '+') {
      results.push(Number(a) + Number(b))
    } else if (op === '-') {
      results.push(Number(a) - Number(b))
    } else if (op === '*') {
      results.push(Number(a) * Number(b))
    } else if (op === '/') {
      results.push(Math.floor(Number(a) / Number(b)))
    } else if (op === '?') {
      break
    }
  }

  return results
}
