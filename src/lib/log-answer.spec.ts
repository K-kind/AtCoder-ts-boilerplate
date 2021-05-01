import logAnswer from './log-answer'

describe('log-answer', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('string', () => {
    const answer = 'A'
    const logSpy = jest.spyOn(console, 'log')
    logAnswer(answer)
    expect(logSpy).toHaveBeenCalledWith('A')
  })

  test('number', () => {
    const answer = 1
    const logSpy = jest.spyOn(console, 'log')
    logAnswer(answer)
    expect(logSpy).toHaveBeenCalledWith(1)
  })

  test('number[]', () => {
    const answer = [1, 2, 3]
    const logSpy = jest.spyOn(console, 'log')
    logAnswer(answer)
    expect(logSpy).toHaveBeenCalledWith('1\n2\n3')
  })

  test('string[]', () => {
    const answer = ['A B C', 'D E F', 'G H I']
    const logSpy = jest.spyOn(console, 'log')
    logAnswer(answer)
    expect(logSpy).toHaveBeenCalledWith('A B C\nD E F\nG H I')
  })
})
