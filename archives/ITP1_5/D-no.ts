// @ts-nocheck
/***** Archive filename *****
ITP1_5/D-no
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [256]
] as const

// const func = (i: number) => {
//   const x = Math.floor(i / 10)
//   if (x === 0) return

//   if (x % 10 === 3) {
//     x
//     func(x)
//   }
// }

const checkNumber = (n: number) => {
  return n % 3 === 0 || n % 10 === 3

  // let x = Math.floor(n / 10)
  // while (x !== 0) {
  //   addNumber(x, array)
  //   x = Math.floor(x / 10)
  // }
}

/** Answer Code */
export default (args: Args): Answer => {
  const [[N]] = args

  const result = []
  for (let i = 1; i < N + 1; i++) {
    if (checkNumber(i)) {
      result.push(i)
      continue
    }

    const digit = i.toString().length
    const a = 10 ** (digit - 1)
    if (Math.floor(i / a) === 3) {
      result.push(i)
      continue
    }
  }
  return result.join(' ')
}
