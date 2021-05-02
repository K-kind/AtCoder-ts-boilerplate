// @ts-nocheck
/* === Archive filename === /
zone2021/A
/ ======================== */

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'

/** Example Arguments */
export const exampleArgs = [
  ['ZOe'],
] as const

/** Answer Code */
export default (args: Args): Answer => {
  const [[s]] = args
  const regex = /ZONe/g
  const matched = s.match(regex)
  return matched ? matched.length : 0
}
