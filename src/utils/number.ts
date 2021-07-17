const DEFAULT_DIGITS = 5
export const toSignificant = (n: number, digits: number = DEFAULT_DIGITS) => {
  const digitsNumber = 10 ** digits
  return Math.round(n * digitsNumber) / digitsNumber
}

/**
 * @param n target number
 * @param digit target digit index
 * @return value of the digit
 */
export const getSpecificDigit = (n: number, digit: number) => {
  const digitNumber = 10 ** digit
  return Math.floor(n / digitNumber) % 10
}
