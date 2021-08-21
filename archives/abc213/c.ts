// @ts-nocheck
/***** Archive filename *****
abc213/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [1000000000, 1000000000, 10],
  [
    [1, 1],
    [10, 10],
    [100, 100],
    [1000, 1000],
    [10000, 10000],
    [100000, 100000],
    [1000000, 1000000],
    [10000000, 10000000],
    [100000000, 100000000],
    [1000000000, 1000000000],
  ]

  // [4, 5, 2],
  // [
  //   [3, 2],
  //   [2, 5],
  // ]

  // [3, 3, 9],
  // [
  //   [2, 2],
  //   [2, 3],
  //   [3,2],
  //   [1,1],
  //   [1,2],
  //   [3,3],
  //   [3,1],
  //   [2,1],
  //   [1,3],
  // ]

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[H, W, N], ABs] = args
  const h: { [key: number]: number } = {}
  const w: { [key: number]: number } = {}

  const ASet = new Set<number>()
  const BSet = new Set<number>()
  for (let i = 0; i < N; i++) {
    ASet.add(ABs[i][0])
    BSet.add(ABs[i][1])
  }

  const ASetArray = Array.from(ASet)
  ASetArray.sort((a, b) => a - b)
  for (let i = 0, length = ASetArray.length; i < length; i++) {
    h[ASetArray[i]] = i
  }

  const BSetArray = Array.from(BSet)
  BSetArray.sort((a, b) => a - b)
  for (let i = 0, length = BSetArray.length; i < length; i++) {
    w[BSetArray[i]] = i
  }

  let result = ''
  for (let i = 0; i < N; i++) {
    const a = ABs[i][0]
    result += String(a - ((a - 1) - h[a])) + ' '
    const b = ABs[i][1]
    result += String(b - ((b - 1) - w[b])) + '\n'
  }

  return result
}
