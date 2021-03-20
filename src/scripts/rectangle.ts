export default (lines: string[]) => {
  const [length, breadth] = lines[0].split(' ').map(Number)
  const area = length * breadth
  const perimeter = (length + breadth) * 2
  return `${area} ${perimeter}`
}
