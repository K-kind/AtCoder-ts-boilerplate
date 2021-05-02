// @ts-nocheck
/* === Archive filename === /
zone2021/D-TLE
/ ======================== */

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // ['ozRnonnoe'],
  ['hellospaceRhellospace'],
] as const

const reverseString = (s: string) => {
  let rv = ''
  for (let i = 0, n = s.length; i < n; i++) {
    rv += s[n - i - 1]
  }
  return rv
}

/** Answer Code */
export default (args: Args): Answer => {
  const [[S]] = args

  let T = ''
  const words = S.split('R')

  for (let i = 0, length = words.length; i < length; i++) {
    const string = words[i]
    if (length % 2 === 0) {
      if (i % 2 === 0) {
        T = reverseString(string) + T
      } else {
        T += string
      }
    } else {
      if (i % 2 === 0) {
        T += string
      } else {
        T = reverseString(string) + T
      }
    }
  }

  const TArray = T.split('')
  for (let i = 0; i < TArray.length; i++) {
    while (TArray[i] === TArray[i - 1]) {
      TArray.splice(i - 1, 2)
      i -= 2
    }
  }

  return TArray.join('')
}

// length === 偶数
// => 偶数が-
// => 奇数をpush 偶数をunshift
//  0   1   2   3   4   5
// ABC DEF GHI JKL MNO PQR
// CBA DEF GHI JKL MNO PQR
// FED ABC GHI JKL MNO PQR
// IHG CBA DEF JKL MNO PQR
// LKJ FED ABC GHI MNO PQR
// ONM IHG CBA DEF JKL PQR
//  -   -   -   +   +   +
//  4   2   0   1   3   5

// length === 奇数
// => 奇数が-
// => 奇数をunshift 偶数をpush

//  0   1   2   3   4   5   6
// ABC DEF GHI JKL MNO PQR STU
// CBA DEF GHI JKL MNO PQR STU
// FED ABC GHI JKL MNO PQR STU
// IHG CBA DEF JKL MNO PQR STU
// LKJ FED ABC GHI MNO PQR STU
// ONM IHG CBA DEF JKL PQR STU
// RQP LKJ FED ABC GHI MNO STU
//  -   -   -   +   +   +   +
//  5   3   1   0   2   4   6
