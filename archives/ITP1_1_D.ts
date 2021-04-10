const fs = require('fs')

const number = 0 as number
const string = 'string' as string

// ここを変更
const ARG_TYPES = [
  number
] as const
type ArgArrays = [
  Array<typeof ARG_TYPES[0]>
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
  let [[time]] = args
  const seconds = time % 60
  time -= seconds
  const minutes = (time % (60 * 60)) / 60
  time -= minutes * 60
  const hours = time / (60 * 60)
  console.log(`${hours}:${minutes}:${seconds}`)
}

const args: ArgArrays = getArgs()
main(args)
