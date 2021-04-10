#!/bin/bash

filename=$1

if [ -z "$filename" ]; then
  echo \"Error: no filename given\" && exit 1
fi

mv "./src/main.ts" "./archives/$filename.ts"
cp "./template.ts" "./src/main.ts"
