// @ts-nocheck
/***** Archive filename *****
abc210/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // [5],
  // ["101"],

  [3],
  ["010"],


] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], [S]] = args

  let looser = ''
  for (let i = 0; i < N; i++) {
    if (S[i] === '0') continue

    looser = i % 2 === 0 ? 'Takahashi' : 'Aoki'
    break
  }

  return looser
}
