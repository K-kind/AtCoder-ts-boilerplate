// @ts-nocheck
/* === Archive filename === /
zone2021/D
/ ======================== */

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'
import { DynamicDeque, RingBufferDeque } from './utils/deque'

/** Example Arguments */
export const exampleArgs = [
  ['ozRnonnoe'],
  // ['hellospaceRhellospace'],
  // ['aaRbaRcaRdaRea'],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[S]] = args
  const length = S.length

  let isReversed = false
  // const T = new DynamicDeque<string>()
  const T = new RingBufferDeque<string>(5 * 10 ** 5)
  for (let i = 0; i < length; i++) {
    const string = S[i]
    if (string === 'R') {
      isReversed = !isReversed
      continue
    }

    if (isReversed) {
      if (string === T.first) {
        T.popFront()
        // console.log('popFront', T)
      } else {
        T.pushFront(string)
        // console.log('pushFront', T)
      }
    } else {
      if (string === T.last) {
        T.popBack()
        // console.log('popBack', T)
      } else {
        T.pushBack(string)
        // console.log('pushBack', T)
      }
    }
  }


  const TArray = T.toArray()

  if (isReversed) {
    TArray.reverse()
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
