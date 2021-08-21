// @ts-nocheck
/***** Archive filename *****
book/4.1
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  const N = 300
  const start = Date.now()
  const memo: { [key: number]: number } = {}
  const tribo = (n: number): number => {
    if (n === 0) return 0
    if (n === 1) return 0
    if (n === 2) return 1


    // return tribo(n - 3) + tribo(n - 2) + tribo(n - 1)
    memo[n] ??= tribo(n - 3) + tribo(n - 2) + tribo(n - 1)
    return memo[n]
  }

  const ans = tribo(N)
  console.log('keikajikan: ', Date.now() - start)
  return ans
}
