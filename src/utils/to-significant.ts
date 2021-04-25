const DEFAULT_DIGITS = 5
export const toSignificant = (n: number, digits: number = DEFAULT_DIGITS) => {
  const digitsNumber = 10 ** digits
  return Math.round(n * digitsNumber) / digitsNumber
}
