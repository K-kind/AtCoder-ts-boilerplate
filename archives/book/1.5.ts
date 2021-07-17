// @ts-nocheck
/***** Archive filename *****
book/1.5
*****************************/

import { Args } from './lib/get-args'
import { Answer } from './lib/log-answer'
import { getSpecificDigit } from './utils/number'

/** Example Arguments */
export const exampleArgs = [

] as const

const isMatch = (t: string, v: number) => {
  return Number(t) === v
}

const checkAdd = (rows: string[]) => {
  const calculated = rows.reduce((sum, row, index) => {
    if (index === rows.length - 1) return sum

    return sum + Number(row)
  }, 0)
  return Number(rows[rows.length - 1]) === calculated
}

const solveAdd = (rows: string[], row: number, col: number): boolean => {
  // if (row === rows.length - 1 && col === rows[row].length - 1) {
  //   return checkAdd(rows)
  // }

  // for (let i = row, rowLength = rows.length; i < rowLength; i++) {
  //   const numStr = rows[i]

  //   for (let j = 0, colLength = numStr.length; j < colLength; j++) {
  //     if (numStr[j] !== '*') continue

  //     for (let n = j > 0 ? 0 : 1; n < 10; n++) {
  //       // numStr[j].String(n)
  //       rows[i] = numStr.slice(0, j) + String(n) + numStr.slice(j + 1)
  //       if (solveAdd(rows, ))
  //     }
  //   }
  // }

  while (true) {
    const numStr = rows[row]
    const ch = rows[row][++col]; //  次の桁に移動し、その文字を ch に
    if (ch === '*') {   //  '*'（空欄）を見つけたら 0～9 を入れて探索、ただし最上位桁に 0 は入れない
      for (let i = col > 0 ? 0 : 1; i < 10; i++) {
        rows[row] = numStr.slice(0, col) + String(i) + numStr.slice(col + 1)
        if (solveAdd(rows, row, col)) return true; //  解をひとつ発見したら終了
      }
      rows[row] = numStr.slice(0, col) + '*' + numStr.slice(col + 1);     //  元に戻す
      return false;       //  解未発見
    }
    if ( ch >= '0' && ch <= '9' ) continue;  //  数字が入っている部分はスキップ
    if( ch == '\0' ) {      //  行末に達した場合
        if( ++row != vs.size() ) {      //  まだ最後に達していない場合
            col = -1;
            continue;
        }
        //  全てが確定した場合
        return checkAdd(vs /*, true*/); //  加算が成立しているかチェック
    }
}

  // if (col === rows[row].length - 1) {
  //   return checkAdd(rows, row + 1, 0)
  // }
  // if ()

}

/** Answer Code */
export default (args: Args): Answer => {
  const [] = args

  const rows = [
    "135",
    "5**",
    "9397",
    "*0*90"
  ]

  // checkAdd(rows, 0, 0)

  // for (let i = 0, rowLength = rows.length; i < rowLength; i++) {
  //   const row = rows[i]
  //   for (let j = 0, colLength = row.length; j < colLength; j++) {
  //     const char = row[j]
  //     if ()
  //   }
  // }

  return rows[rows.length - 1]
}
