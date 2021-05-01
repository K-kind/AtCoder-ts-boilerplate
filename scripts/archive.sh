#!/bin/bash

readonly ARCHIVES_PATH='../archives'
readonly ANSWER_FILE_PATH='../src/my-answer.ts'

# 終了したコードをアーカイブに移動
function archive() {
  local cwd="${1}"
  local answer_file_path="${cwd}/${ANSWER_FILE_PATH}"

  # 解答ファイルの2行目の内容（アーカイブ時のファイルパス）を取得
  local archive_file_path
  archive_file_path=$(sed -n 2p "${answer_file_path}")

  if [ -z "${archive_file_path}" ]; then
    local message="Error: No filename was given for archive file"
    echo -e "${message}" && exit 1
  fi

  local directories
  local file_name
  # ディレクトリ名をファイル名と分離
  if [[ ${archive_file_path} =~ ^(.+/)([^/]+)$ ]]; then
    directories="${BASH_REMATCH[1]}"
    file_name="${BASH_REMATCH[2]}"
  else
    file_name="${archive_file_path}"
  fi

  # ファイル名に拡張子を付与
  if [[ ! ${file_name} =~ ^\.ts$ ]]; then
    file_name="${file_name}.ts"
  fi

  local archive_directory_path="${cwd}/${ARCHIVES_PATH}/${directories}"
  # ディレクトリがない場合は作成
  if [ ! -d "${archive_directory_path}" ]; then
    mkdir -p "${archive_directory_path}"
  fi

  local archive_path="${archive_directory_path}${file_name}"
  # ファイル先頭に@ts-nocheckコメントを追加（importエラー非表示のため）
  echo "// @ts-nocheck" >"${archive_path}"
  cat "${answer_file_path}" >>"${archive_path}"
}

function main() {
  local cwd
  cwd="$(cd "$(dirname "$0")" && pwd)"

  archive "${cwd}"
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
