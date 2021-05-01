// @ts-nocheck
import { Answer } from './lib/log-answer'

/** 標準入力から受け取る引数の型 */
type Args = [string[]]

export default (args: unknown): Answer => {
  const typedArgs = args as Args
  const string = typedArgs[0][0]
  const result = string.replace(/^(\w)([\w]{2})/, (_match, first, rest) => {
    return `${rest}${first}`
  })
  return result
}

/** テスト用の引数 */
export const tmpArgs: Args = [
  ['abc']
]
