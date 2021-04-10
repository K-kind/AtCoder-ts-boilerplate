const fs = require('fs')

const number = 0 as number
const string = 'string' as string

// set arg types
const ARG_TYPES = [
  number,
  // string
] as const
type ArgArrays = [
  Array<typeof ARG_TYPES[0]>,
  // Array<typeof ARG_TYPES[1]>
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

// main program
const main = (args: ArgArrays) => {
  const [[W, H, x, y, r]] = args
  const result = (x - r < 0 || x + r > W || y - r < 0 || y + r > H) ? 'No' : 'Yes'
  console.log(result)
}

const args: ArgArrays = getArgs()
main(args)
