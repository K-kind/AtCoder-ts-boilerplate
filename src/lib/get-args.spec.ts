import fs from 'fs'
import getArgs from './get-args'
import * as MyAnswer from '../my-answer'

describe('get-args', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('[number[]]', () => {
    // sample argument
    ;(MyAnswer.exampleArgs as any) = [[1, 2, 3]]
    // string from standard input
    const linesStr = '1 2 3'
    jest.spyOn(fs, 'readFileSync').mockReturnValue(linesStr)
    expect(getArgs()).toStrictEqual([[1, 2, 3]])
  })

  test('[number[]] with a different sample', () => {
    ;(MyAnswer.exampleArgs as any) = [[1, 2, 3, 4, 5, 6]]
    const linesStr = '1 2 3'
    jest.spyOn(fs, 'readFileSync').mockReturnValue(linesStr)
    expect(getArgs()).toStrictEqual([[1, 2, 3]])
  })

  test('[number[]] with a final line feed', () => {
    ;(MyAnswer.exampleArgs as any) = [[1, 2, 3]]
    const linesStr = '1 2 3\n'
    jest.spyOn(fs, 'readFileSync').mockReturnValue(linesStr)
    expect(getArgs()).toStrictEqual([[1, 2, 3]])
  })

  test('[number[]] with a trailing whitespace', () => {
    ;(MyAnswer.exampleArgs as any) = [[1, 2, 3]]
    const linesStr = '1 2 3\n '
    jest.spyOn(fs, 'readFileSync').mockReturnValue(linesStr)
    expect(getArgs()).toStrictEqual([[1, 2, 3]])
  })

  test('[number[], string[]]', () => {
    ;(MyAnswer.exampleArgs as any) = [[1, 2, 3], ['A', 'B', 'C']]
    const linesStr = '1 2 3\nA B C\n'
    jest.spyOn(fs, 'readFileSync').mockReturnValue(linesStr)
    expect(getArgs()).toStrictEqual([[1, 2, 3], ['A', 'B', 'C']])
  })

  test('[number[], string[], number[][]]', () => {
    ;(MyAnswer.exampleArgs as any) = [[1, 2, 3], ['A', 'B', 'C'], [[1, 2], [3, 4], [5, 6]]]
    const linesStr = '1 2 3\nA B C\n1 2\n3 4\n5 6\n'
    jest.spyOn(fs, 'readFileSync').mockReturnValue(linesStr)
    expect(getArgs()).toStrictEqual([[1, 2, 3], ['A', 'B', 'C'], [[1, 2], [3, 4], [5, 6]]])
  })
})
