#!/bin/bash

readonly TEMPLATE_FILE_PATH='../.my-answer-template'
readonly ANSWER_FILE_PATH='../src/my-answer.ts'

# 解答用テンプレートファイルをリセット
function reset() {
  local cwd="${1}"
  local template_file_path="${cwd}/${TEMPLATE_FILE_PATH}"
  local answer_file_path="${cwd}/${ANSWER_FILE_PATH}"

  cp "${template_file_path}" "${answer_file_path}"
}

function main() {
  local cwd
  cwd="$(cd "$(dirname "$0")" && pwd)"

  reset "${cwd}"
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
