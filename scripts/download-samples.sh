#!/usr/bin/env bash

DIR="./samples"

if [ ! -d $DIR ]; then
  mkdir $DIR
fi

FILE="$DIR/qrcode.y4m"

if test -f "$FILE"; then
  echo "$FILE exists"
else
  wget --load-cookies /tmp/cookies.txt "https://drive.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://drive.google.com/uc?export=download&id=1wpsNoXTX3_y6Wrh7NE0SVwIZufK0-xeu' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=1wpsNoXTX3_y6Wrh7NE0SVwIZufK0-xeu" -O $FILE && rm -rf /tmp/cookies.txt
fi
