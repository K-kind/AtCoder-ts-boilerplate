import getLines from './get-lines'
import getResult from './scripts/rectangle'

const main = () => {
  getLines().then((lines) => {
    const result = getResult(lines)
    console.log(result)
  })
}
// const main = async () => {
//   const lines = await getLines()
//   const result = getResult(lines)
//   console.log(result)
// }

main()
