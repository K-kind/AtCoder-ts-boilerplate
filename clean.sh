#!/bin/bash

readonly MAIN_FILE_PATH='src/main.ts'
readonly TEMPLATE_FILE_PATH='src/template.ts'
readonly ARCHIVES_PATH='archives'
readonly TEMPLATE_COMMENT_LENGTH=3

function clean() {
  local cwd="${1}"
  local archive_file_name="${2}"
  local archive_file_path="${cwd}/${ARCHIVES_PATH}/${archive_file_name}.ts"
  local main_file_path="${cwd}/${MAIN_FILE_PATH}"
  # 終了したコードをアーカイブに移動
  mv "${main_file_path}" "${archive_file_path}"

  local template_file_path="${cwd}/${TEMPLATE_FILE_PATH}"
  local template_file_all_length
  # wc -l により "   43 ファイルパス"が得られるため、awkで行数のみ取り出す
  template_file_all_length="$(wc -l "${template_file_path}" | awk '{ print $1 }')"
  local template_file_source_length=$((template_file_all_length - TEMPLATE_COMMENT_LENGTH))
  # templateの最初の数行はモジュールモードにするための不要なコードのため、
  # それを除いてmain.tsテンプレートを復元
  tail -n "${template_file_source_length}" "${template_file_path}" >"${main_file_path}"
}

function main() {
  local file_name="${1}"
  local cwd
  cwd="$(cd "$(dirname "$0")" && pwd)"

  # [-n "${arg}"]は空ではない場合、[-z "${arg}"]は空の場合
  if [ -n "${file_name}" ]; then
    clean "${cwd}" "${file_name}"
  else
    echo '"Error: アーカイブするファイル名を指定してください"' && exit 1
  fi
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
