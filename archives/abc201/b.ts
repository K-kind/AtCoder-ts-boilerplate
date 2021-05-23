// @ts-nocheck
/***** Archive filename *****
abc201/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [3],
  [
    ['Everest', '8849'],
    ['K2', '8611'],
    ['Kangchenjunga', '8586']
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], mountains] = args
  mountains.sort((a, b) => Number(a[1]) - Number(b[1]))
  return mountains[N - 2][0]
}
