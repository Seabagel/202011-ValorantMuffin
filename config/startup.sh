#!/bin/sh

cd $HOME/github/Discord-MamaSlimes/

git fetch

git pull

npm i

npm start &

exit 0