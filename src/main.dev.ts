import myAnswer, { exampleArgs } from './my-answer'
import logAnswer from './lib/log-answer'

const main = () => {
  const answer = myAnswer(exampleArgs)
  logAnswer(answer)
}

main()
