import fs from 'fs'

/**
 * 各行の要素の配列の配列を返す
 * 数字の場合は暗黙的に型キャストさせる
 * */
 export default () => {
  const lines = getLines()
  return lines.map((line) => line.trim().split(' ') as number[] | string[])
}

const getLines = () => {
  const linesStr = fs.readFileSync('/dev/stdin', 'utf8')
  return linesStr.split('\n')
}
