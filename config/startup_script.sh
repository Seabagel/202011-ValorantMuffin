#!/bin/sh

# https://raspberrypi.stackexchange.com/questions/15475/run-bash-script-on-startup
# sh $HOME/startup_script.sh

## Update repo
cd $HOME/github/Discord-MamaSlimes/
git fetch
git pull
## Start Nodejs App
npm i
npm run start &
disown -h
exit

## Uncommit / Flush files
# rm -rf *
# git reset --hard

## Update the startup script
# sudo nano .bashrc
# Scroll down to the bottom and add the line: ./startup_script.sh
# sudo cp $HOME/github/Discord-MamaSlimes/config/startup_script.sh $HOME/startup_script.sh