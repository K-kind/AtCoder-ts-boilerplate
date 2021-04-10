#!/bin/bash

readonly ARCHIVES_PATH='../archives'
readonly ANSWER_FILE_PATH='../src/my-answer.ts'

# 終了したコードをアーカイブに移動
function archive() {
  local cwd="${1}"
  local archive_file_name="${2}"
  local archive_file_path="${cwd}/${ARCHIVES_PATH}/${archive_file_name}.ts"
  local answer_file_path="${cwd}/${ANSWER_FILE_PATH}"

  mv "${answer_file_path}" "${archive_file_path}"
}

function main() {
  local file_name="${1}"
  local cwd
  cwd="$(cd "$(dirname "$0")" && pwd)"

  # [-n "${arg}"]は空ではない場合、[-z "${arg}"]は空の場合
  if [ -n "${file_name}" ]; then
    archive "${cwd}" "${file_name}"
  else
    local message="エラー: アーカイブするファイル名を指定してください\n指定方法: npm run finish -- ファイル名"
    echo -e "${message}" && exit 1
  fi
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
