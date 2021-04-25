import myAnswer, { exampleArgs } from './my-answer'
import logAnswer from './lib/log-answer'
import { Args } from './lib/get-args'

const main = () => {
  const answer = myAnswer(exampleArgs as unknown as Args)
  logAnswer(answer)
}

main()
