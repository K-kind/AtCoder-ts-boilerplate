// @ts-nocheck
import { Answer } from './lib/log-answer'

/** 引数の例 */
export const exampleArgs = [
  [5],
  ['1234567890'],
  [6],
  [
    [1, 1, 5],
    [2, 0, 0],
    [1, 1, 2],
    [1, 2, 3],
    [2, 0, 0],
    [1, 1, 8],
  ]
] as const

/** 解答 */
export default (args: typeof exampleArgs): Answer => {
  const [[N], [S], [Q], queries] = args
  let strings = S.split('')
  let isReversed = false

  for (let i = 0; i < Q; i++) {
    const [T, A, B] = queries[i]
    if (T == 2) {
      isReversed = !isReversed
      continue
    }

    let indexOfA = A - 1
    let indexOfB = B - 1
    if (isReversed) {
      indexOfA = A <= N ? indexOfA + N : indexOfA - N
      indexOfB = B <= N ? indexOfB + N : indexOfB - N
    }
    const aString = strings[indexOfA]
    const bString = strings[indexOfB]
    strings.splice(indexOfA, 1, bString)
    strings.splice(indexOfB, 1, aString)
  }

  if (isReversed) {
    const firstHalf = strings.splice(0, N)
    strings = [...strings, ...firstHalf]
  }

  return strings.join('')
}
