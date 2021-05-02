// @ts-nocheck
/* === Archive filename === /
zone2021/D-TLE-2
/ ======================== */

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // ['ozRnonnoe'],
  ['hellospaceRhellospace'],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[S]] = args

  const T: string[] = []
  const chunks = S.split('R')

  for (let i = 0, length = chunks.length; i < length; i++) {
    const strings = chunks[i].split('')
    if (length % 2 === 0) {
      if (i % 2 === 0) {
        strings.forEach((s) => {
          if (s === T[0]) {
            T.shift()
          } else {
            T.unshift(s)
          }
        })
        // T = reverseString(strings) + T
      } else {
        strings.forEach((s) => {
          if (s === T[T.length - 1]) {
            T.pop()
          } else {
            T.push(s)
          }
        })
        // T += strings
      }
    } else {
      if (i % 2 === 0) {
        strings.forEach((s) => {
          if (s === T[T.length - 1]) {
            T.pop()
          } else {
            T.push(s)
          }
        })
        // T += strings
      } else {
        strings.forEach((s) => {
          if (s === T[0]) {
            T.shift()
          } else {
            T.unshift(s)
          }
        })
        // T = reverseString(strings) + T
      }
    }
  }

  return T.join('')
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
