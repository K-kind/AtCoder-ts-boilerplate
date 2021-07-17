// @ts-nocheck
/***** Archive filename *****
abc203/C
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [2, 3],
  [
    [2, 1],
    [5, 10],
  ]
  // [5, 1000000000],
  // [
  //   [1, 1000000000],
  //   [2, 1000000000],
  //   [3, 1000000000],
  //   [4, 1000000000],
  //   [5, 1000000000],
  // ]
  // [3, 2],
  // [
  //   [5, 5],
  //   [2, 1],
  //   [2, 2],
  // ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, K], ABs] = args
  const sortedABs = ABs.sort(([a], [b]) => a - b)

  const computedABs: number[][] = []
  for (let i = 0; i < N; i++) {
    const current = sortedABs[i]
    if (i === 0) {
      computedABs.push(current)
      continue
    }

    const prev = sortedABs[i - 1]
    if (current[0] === prev[0]) {
      computedABs[computedABs.length - 1][1] += current[1]
    } else {
      computedABs.push(current)
    }
  }

  const ABsLength = computedABs.length
  let money = K
  let number = 0
  let prevA = 0
  for (let i = 0; i < ABsLength; i++) {
    const [A, B] = computedABs[i]
    if (i === 0 && A > money) {
      number = K
      break
    }

    if (money < A - prevA) {
      number = number + money
      break
    }

    money += B - (A - prevA)
    prevA = A
    number = A

    if (i === ABsLength - 1) {
      number += money
    }
  }
  return number
}
