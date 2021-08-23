#!/usr/bin/env bash

cd dockerfile
cp ../package.json .
cp ../package-lock.json .

## remove the largest part that matches the regex
## and test the remainder if it is empty - if empty means there are no other chars only numeric
if [ ! -z "${1##*[!0-9]*}" ];
then
  echo "tar -czpf dockerfile.v$1.tar.gz  package.json package-lock.json Dockerfile .dockerignore"
  tar -czpf "dockerfile.v$1.tar.gz" package.json package-lock.json Dockerfile .dockerignore
  mkdir dist 2>/dev/null
  mv "dockerfile.v$1.tar.gz" "dist/dockerfile.v$1.tar.gz"
else
  echo "$1 is not a number - please provide a number like so: $0 5"
  exit 1;
fi
