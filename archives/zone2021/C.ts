// @ts-nocheck
/* === Archive filename === /
zone2021/C
/ ======================== */

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  [10],
  [
    [6, 7, 5, 18, 2],
    [3, 8, 1, 6, 3],
    [7, 2, 8, 7, 7],
    [6, 3, 3, 4, 7],
    [12, 8, 9, 15, 9],
    [9, 8, 6, 1, 10],
    [12, 9, 7, 8, 2],
    [10, 3, 17, 4, 10],
    [3, 1, 3, 19, 3],
    [3, 14, 7, 13, 1],
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N], members] = args

  const check = (x: number) => {
    const s = new Set<number>()
    for (let i = 0; i < N; i++) {
      const member = members[i]
      let sum = 0
      for (let j = 0; j < 5; j++) {
        if (member[j] >= x) {
          sum += 1 << j
        }
      }
      s.add(sum)
    }
    const sArray = Array.from(s.values())
    for (const x1 of sArray) {
      for (const y1 of sArray) {
        for (const z1 of sArray) {
          if ((x1 | y1 | z1) === 31) {
            return true
          }
        }
      }
    }
    return false
  }

  let ok = 0
  let ng = 10 ** 9 + 1
  while (ng - ok > 1) {
    const cen = Math.floor((ok + ng) / 2)
    if (check(cen)) {
      ok = cen
    } else {
      ng = cen
    }
  }
  return ok
}
