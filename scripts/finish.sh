#!/bin/bash

# 終了したコードをアーカイブに移動 & 解答用テンプレートファイルをリセット
# npm scriptsでは途中に引数を渡すことができないため、シェルスクリプトで実行
function finish() {
  local cwd="${1}"
  local file_name="${2}"

  "${cwd}/archive.sh" "${file_name}" && "${cwd}/reset.sh"
}

function main() {
  local file_name="${1}"
  local cwd
  cwd="$(cd "$(dirname "$0")" && pwd)"

  finish "${cwd}" "${file_name}"
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
