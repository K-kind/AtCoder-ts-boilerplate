// @ts-nocheck
/***** Archive filename *****
abc208/c
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [7, 1000000000000],
  [99, 8, 2, 4, 43, 5, 3],
  // [2, 7],
  // [1, 8],
  // [3, 2],
  // [33, 11, 3],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, K], A] = args
  const order: number[] = []
  for (let i = 0; i < N; i++) {
    order.push(i)
  }
  order.sort((a, b) => A[a] - A[b])

  const answer = new Array<number>(N)
  answer.fill(Math.floor(K / N))

  const remainder = K % N
  for (let i = 0; i < remainder; i++) {
    answer[order[i]]++
  }

  return answer
  // const [[N, K], A] = args
  // // [国民番号, お菓子, 最初のindex]
  // const People: [number, number, number][] = []
  // const perPerson = Math.floor(K / N)
  // for (let i = 0; i < N; i++) {
  //   People.push([A[i], perPerson, i])
  // }

  // // 国民番号昇順ソート
  // People.sort(([aA], [bA]) => aA - bA)
  
  // const remainder = K % N
  // for (let i = 0; i < remainder; i++) {
  //   People[i][1]++
  // }
  // // 最初の並びに戻す
  // People.sort(([,,aI], [,,bI]) => aI - bI)
  // return People.map(p => p[1])
}
