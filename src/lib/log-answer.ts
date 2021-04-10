export type Answer = string | number | (string | number)[]

export default (answer: Answer) => {
  const oneLineAnswer = toOneLine(answer)
  console.log(oneLineAnswer)
}

const toOneLine = (answer: Answer) => {
  if (Array.isArray(answer)) {
    return answer.join('\n')
  }

  return answer
}
