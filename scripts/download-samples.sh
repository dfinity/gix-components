#!/usr/bin/env bash

DIR="./samples"

if [ ! -d $DIR ]; then
  mkdir $DIR
fi

FILE="$DIR/qrcode.y4m"

if test -f "$FILE"; then
  echo "$FILE exists"
else
  wget "https://dfinity-download-public.s3.eu-central-1.amazonaws.com/static/gix-qrcode.y4m" -O $FILE
fi
