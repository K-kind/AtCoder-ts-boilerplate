// @ts-nocheck
/***** Archive filename *****
abc203/C-TLE1
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [2, 3],
  // [
  //   [2, 1],
  //   [5, 10],
  // ]
  // [5, 1000000000],
  // [
  //   [1, 1000000000],
  //   [2, 1000000000],
  //   [3, 1000000000],
  //   [4, 1000000000],
  //   [5, 1000000000],
  // ]
  [3, 2],
  [
    [5, 5],
    [2, 1],
    [2, 2],
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, K], ABs] = args
  // const sortedABs = ABs.sort(([a], [b]) => a - b)
  const friends: {[key: number]: number} = {}
  for (let i = 0, length = ABs.length; i < length; i++) {
    const [A, B] = ABs[i]
    friends[A] = friends[A] ? friends[A] + B : B
  }

  let money = K
  let number = 0
  while (money > 0) {
    number++
    money--
    money += friends[number] || 0
  }
  // for (let i = 0; i < money; i++) {

  // }
  return number
}
