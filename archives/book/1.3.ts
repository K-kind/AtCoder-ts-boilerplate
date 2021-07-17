// @ts-nocheck
/***** Archive filename *****
book/1.3
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'
import { getSpecificDigit } from './utils/number'

/** Example Arguments */
export const exampleArgs = [

] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args

  let result = 0
  let ok = false
  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      for (let c = 0; c < 10; c++) {
        const d3e = (20 + a) * c
        if (getSpecificDigit(d3e, 1) !== 3) continue
        if (d3e > 999 || d3e < 100) continue
        
        const fg = (20 + a) * b
        if (fg > 99 || fg < 10) continue
        
        result = (20 + a) * (b * 10 + c)
        if (getSpecificDigit(result, 1) !== 4) continue
        if (result > 999 || result < 100) continue

        ok = true
        break
      }
      if (ok) break
    }
    if (ok) break
  }
  return result
}
