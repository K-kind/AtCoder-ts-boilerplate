import { Answer } from './lib/log-answer'

/** 標準入力から受け取る引数の型 */
type Args = [number[], string[]]

export default (args: unknown): Answer => {
  const typedArgs = args as Args
  return 'answer'
}

/** テスト用の引数 */
export const tmpArgs: Args = [
  [1, 2, 3],
  ['test1', 'test2', 'test3']
]
