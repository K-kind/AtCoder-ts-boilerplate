// @ts-nocheck
/***** Archive filename *****
book/4.8fibo
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [

] as const

// ------------- no memo ---------------
// const fibo = (n: number): number => {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   return fibo(n - 2) + fibo(n - 1)
// }

// /** Answer Code */
// export default (args: Args): Answer => {
//   const [] = args
//   return fibo(7)
// }

const memo: number[] = []

const fibo = (n: number): number => {
  if (n === 0) return 0
  if (n === 1) return 1

  memo[n] ||= fibo(n - 2) + fibo(n - 1)
  return memo[n]
}

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args
  return fibo(10)
}
