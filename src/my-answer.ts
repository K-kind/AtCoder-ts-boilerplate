import { Answer } from './lib/log-answer'

/** 引数の例 */
export const exampleArgs = [
  [1, 2, 3],
  ['TEST', 'TEST'],
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
] as const

/** 解答 */
export default (args: typeof exampleArgs): Answer => {
  return 'answer'
}
