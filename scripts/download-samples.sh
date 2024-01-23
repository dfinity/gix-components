#!/usr/bin/env bash

DIR="./samples"

if [ ! -d $DIR ]; then
  mkdir $DIR
fi

FILE="$DIR/qrcode.y4m"

if test -f "$FILE"; then
  echo "$FILE exists"
else
  curl -sSL https://dfinity-download-public.s3.eu-central-1.amazonaws.com/static/gix-qrcode.y4m -o "$FILE"
fi
