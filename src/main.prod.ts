import getArgs from './lib/get-args'
import myAnswer from './my-answer'
import logAnswer from './lib/log-answer'

const main = () => {
  const args = getArgs()
  const answer = myAnswer(args)
  logAnswer(answer)
}

main()
