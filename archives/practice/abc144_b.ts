// @ts-nocheck
/* === Archive filename === /
practice/abc144_b
/ ======================== */

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [81],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N]] = args
  let result = 'No'
  for (let i = 1; i < 10; i++) {
    if (N % i !== 0) continue

    if (N / i < 10) {
      result = 'Yes'
    }
  }
  return result
}
