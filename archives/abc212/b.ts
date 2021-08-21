// @ts-nocheck
/***** Archive filename *****
abc212/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  ['9312']
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[X]] = args
  if (X[0] === X[1] && X[0] === X[2] && X[0] === X[3]) return 'Weak'

  let isStrong = false
  for (let i = 0; i < 3; i++) {
    if (X[i] === '9') {
      isStrong ||= X[i + 1] !== '0'
    } else {
      isStrong ||= X[i + 1] !== String(Number(X[i]) + 1)
    }
  }
  return isStrong ? 'Strong' : 'Weak'
}
