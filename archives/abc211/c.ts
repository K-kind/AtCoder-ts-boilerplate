// @ts-nocheck
/***** Archive filename *****
abc211/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  ['chokudaichokudaichokudai']
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const Mapping: { [key: string]: number } = {
    'c': 1,
    'h': 2,
    'o': 3,
    'k': 4,
    'u': 5,
    'd': 6,
    'a': 7,
    'i': 8,
  }

  const [[S]] = args
  const SNumber: [number, number][] = []
  for (let i = 0, length = S.length; i < length; i++) {
    const num = Mapping[S[i]]
    if (num == undefined) continue

    if (num === 8) {
      SNumber.push([num, 1])
    } else {
      SNumber.push([num, 0])
    }
  }

  const SNumLength = SNumber.length
  // for (let i = SNumLength - 1; i >= 0; i--) {
  //   const target = SNumber[i]
  //   if (target[0] !== 7) continue

  //   for (let j = SNumLength - 1; j > i; j--) {
  //     if (SNumber[j][0] === 8) {
  //       target[1]++
  //     }
  //   }
  // }

  for (let n = 7; n >= 1; n--) {
    for (let i = SNumLength - 1; i >= 0; i--) {
      const target = SNumber[i]
      if (target[0] !== n) continue
  
      for (let j = SNumLength - 1; j > i; j--) {
        if (SNumber[j][0] === n + 1) {
          target[1] += SNumber[j][1]
        }
      }
    }
  }

  let result = 0
  for (let i = SNumLength - 1; i >= 0; i--) {
    if (SNumber[i][0] === 1) {
      result += SNumber[i][1]
    }
  }
  // console.log(SNumber)
  return result
}
