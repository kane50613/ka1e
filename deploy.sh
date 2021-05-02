#!/bin/bash
set -e
npm run build
cd dist
echo "ka1e.co" > CNAME
git init
git add .
git commit -am "update"
git push -f https://github.com/kane-tw/kane-tw.github.io.git HEAD:main
