// @ts-nocheck
/***** Archive filename *****
abc202/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  ['01010'],
] as const

const correspond = {
  '0': '0',
  '1': '1',
  '6': '9',
  '8': '8',
  '9': '6',
} as any
/** Answer Code */
export default (args: Args): Answer => {
  const [[S]] = args
  let answer = ''
  for (let i = S.length - 1; i >= 0; i--) {
    answer += correspond[S[i]]
  }
  return answer
}
