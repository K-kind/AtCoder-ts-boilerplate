# algorithm-solving-with-ts
AtCoder等の問題にTypeScriptで取り組む際のテンプレート

## 機能
- 標準入力から受け取る引数に型情報付与
- 提出用コードを自動でクリップボードにコピー
- 解答をアーカイブに移動

# 環境
- Node.js: v14.16.1
- OS: macOS

# 使用方法

## 初回インストール
```
npm i
```

## 問題を解く手順

### 答案を記載
`src/my-answer.ts` に引数の例を1つ書き、その下に解答コードを記載する（引数の型は自動で付与される）。

```ts
/******************* 引数の型キャスト *******************
固定行数を受け取る場合
TEST
1 2 3
=> [['TEST'], [1, 2, 3]]

固定行数 + 任意行数の場合
TEST
1 2 3
4 5 6
7 8 9
…
=> [['TEST'], [[1, 2, 3], [4, 5, 6], [7, 8, 9], ...]]
******************************************************/
// 引数の例を1つ記載
export const exampleArgs = [
  ['TEST'],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
] as const

// 解答を記載（Argsは自動で[string[], number[][]]の型になる）
// 戻り値が自動でconsole.logされる（配列も可）
export default (args: Args): Answer => {
  const [[test], numbers] = args // test: string; numbers: number[][]
  return 'answer'
}
```

### watchビルドを開始
ファイルの変更を監視し、サンプル引数で答案コードを実行する。
```
npm run watch
```

### 答案用コードをビルド
実際に標準入力から引数を受け取って実行するコードをビルドする。クリップボードに自動でコピーされた内容を、提出する。（ビルド結果はJS）
```
npm run build
```

### 答案をアーカイブに移動しコードをリセットする
`src/my-answer.ts` の先頭コメント行にアーカイブ時の保存パス（ファイル名のみでも可）を記入。

```ts
/* === Archive filename === /
abc199/A
/ ======================== */
```

下記コマンドで、`src/my-answer.ts` の内容が `archives/abc199/A.ts` に移動される。
```
npm run finish
```
