const fs = require('fs')

const number = 0 as number
const string = 'string' as string

// ここを変更
const ARG_TYPES = [
  number,
  string
] as const
type ArgArrays = [
  Array<typeof ARG_TYPES[0]>,
  Array<typeof ARG_TYPES[1]>
]

const getArgs = () => {
  const linesStr = fs.readFileSync('/dev/stdin', 'utf8') as string
  const lines = linesStr.split('\n')

  const args = ARG_TYPES.map((type, index) => {
    const line = lines[index]
    if (typeof type === 'number') {
      return line.trim().split(' ').map(numberStr => Number(numberStr))
    } else {
      return line.trim().split(' ')
    }
  })
  return args as ArgArrays
}

// 実装の中身
const main = (args: ArgArrays) => {
  let result
  const length = args[0][0]
  if (length % 2 === 1) {
    result = 'No'
  } else {
    const string = args[1][0]
    const first = string.slice(0, (length / 2))
    const last = string.slice(length / 2)
    result = first === last ? 'Yes' : 'No'
  }
  console.log(result)
}

// const args: ArgArrays = getArgs()
const args: ArgArrays = [[1], ['z']]
main(args)
