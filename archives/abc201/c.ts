// @ts-nocheck
/***** Archive filename *****
abc201/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  ['o?????xxxx'],
  // ['o?oo?oxoxo'],
  // ['xxxxx?xxxo'],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[S]] = args
  let o = 0
  let x = 0
  let q = 0
  for (let i = 0; i < 10; i++) {
    switch (S[i]) {
      case 'o':
        o++
        break
      case 'x':
        x++
        break
      case '?':
        q++
        break
      default:
        break
    }
  }
  if (o > 4 || x === 10) return 0

  if (o === 4) return 4 * 3 * 2 * 1

  if (o === 0) return q ** 4

  const oq = o + q
  if (o === 1) return oq ** 4 - q ** 4

  const all = oq ** 4
  const partial = ((oq - 1) ** 4 - (oq - 2) ** 4) * o
  const nothing = q ** 4
  return all - partial - nothing
}
