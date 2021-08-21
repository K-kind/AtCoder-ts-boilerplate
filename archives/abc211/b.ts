// @ts-nocheck
/***** Archive filename *****
abc211/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  // ['3B'],
  // ['HR'],
  // ['2B'],
  // ['H'],
  ['2B'],
  ['3B'],
  ['HR'],
  ['3B'],

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const ANS = ['3B','HR','2B','H']
  const valid = ANS.every((A) => {
    return args.some((arg) => arg[0] === A)
  })
  return valid ? 'Yes' : 'No'
}
