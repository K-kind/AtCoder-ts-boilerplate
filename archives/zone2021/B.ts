// @ts-nocheck
/* === Archive filename === /
zone2021/B
/ ======================== */

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'
import { toSignificant } from './utils/to-significant'

/** Example Arguments */
export const exampleArgs = [
  [5, 896, 483],
  [
    [228, 59],
    [529, 310],
    [339, 60],
    [78 ,266],
    [659, 391],
  ]
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[N, D, H], towers] = args
  let result = 0
  for (let i = 0; i < N; i++) {
    const [d, h] = towers[i]
    if ((h / d) <= (H / D)) continue

    const y = ((D * h - d * H) * h / (H - h)) / ((D * h - d * H) / (H - h) + d)
    const significantY = toSignificant(y, 3)
    result = result < significantY ? significantY : result
  }
  return result
}
