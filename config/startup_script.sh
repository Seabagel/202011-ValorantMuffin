#!/bin/sh
cd $HOME/github/Discord-MamaSlimes/
git fetch
git pull
npm i
npm run start &
disown -h
# chmod +x ~/github/Discord-MamaSlimes/config/startup_script.sh
# sh ~/github/Discord-MamaSlimes/config/startup_script.sh
# @reboot ~/github/Discord-MamaSlimes/config/startup_script.sh
# rm -rf *
# exit