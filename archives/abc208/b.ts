// @ts-nocheck
/***** Archive filename *****
abc208/b
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [119]
] as const

const factorial = (n: number): number => {
  return n === 1 ? 1 : n * factorial(n - 1)
}

/** Answer Code */
export default (args: Args): Answer => {
  const [[P]] = args
  const yens: number[] = []
  for (let i = 0; i < 10; i++) {
    yens.push(factorial(i + 1))
  }
  const counts: number[] = []
  for (let i = 0; i < 10; i++) {
    counts[i] = 0
  }
  const maxS: number[] = []
  for (let i = 0; i < 10; i++) {
    const yen = yens[i]
    if (yen * 100 <= P) {
      maxS[i] = 100
      continue
    }
    for (let j = 99; j >= 0; j--) {
      if (yen * j <= P) {
        maxS[i] = j
        break
      }
    }
  }

  const hoge = (index: number, sum: number, count: number): number[] | undefined => {
    const yen = yens[index]
    for (let yenCount = maxS[index]; yenCount >= 0; yenCount--) {
      const currentSum = sum + yen * yenCount
      const currentCount = count + yenCount
      if (currentSum === P) return [currentSum, currentCount]
      if (currentSum > P) continue
      const result = hoge(index - 1, currentSum, currentCount)
      if (result) {
        return result
      }
    }
  }

  const [_sum, count] = hoge(9, 0, 0)!

  return count
}
