import myAnswer, { tmpArgs } from './my-answer'
import logAnswer from './lib/log-answer'

const main = () => {
  const answer = myAnswer(tmpArgs)
  logAnswer(answer)
}

main()
