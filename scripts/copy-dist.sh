#!/bin/bash

readonly BUNDLE_FILE_PATH='../dist/main.prod.js'

# バンドル後の提出用ファイルをクリップボードにコピー
# （pbcopyはOS Xのコマンド）
function copy_dist() {
  local cwd="${1}"
  pbcopy <"${cwd}/${BUNDLE_FILE_PATH}"
}

function main() {
  local cwd
  cwd="$(cd "$(dirname "$0")" && pwd)"

  copy_dist "${cwd}"
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
