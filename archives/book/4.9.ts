// @ts-nocheck
/***** Archive filename *****
book/4.9
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  const N = 5
  const W = 24
  const a = [3, 2, 6, 5, 10]

  const memo: { [key: number]: { [key: number]: boolean } } = {}
  for (let i = 0; i <= W; i++) {
    memo[i] = {}
  }

  let count = 0

  const checkIfValid = (n: number, w: number): boolean => {
    count++
    if (n === 0) return w === 0

    memo[w][n] ??= checkIfValid(n - 1, w) || checkIfValid(n - 1,  w - a[n - 1])
    return memo[w][n]

    // if (checkIfValid(n - 1, w)) return true
    // if (checkIfValid(n - 1,  w - a[n - 1])) return true
    // return false
  }
  
  const ans = checkIfValid(N, W)
  console.log(count)

  return ans ? 'Yes' : 'No'
}
