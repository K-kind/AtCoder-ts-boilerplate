/* === Archive filename === /

/ ======================== */

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [1, 2, 3],
  ['TEST', 'TEST'],
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  return 'answer'
}
