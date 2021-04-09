#!/bin/sh

## Update repo
cd $HOME/github/Discord-MamaSlimes/
git fetch
git pull

## Update the startup script
sudo cp $HOME/github/Discord-MamaSlimes/config/startup_script.sh $HOME/github/startup_script.sh
sudo chmod +x $HOME/github/startup_script.sh

## Start Nodejs App
npm i
npm run start &
disown -h
exit

## Uncommit / Flush files
# rm -rf *
# git reset --hard

## Startup Chrontab
# crontab -u pi -e
# @reboot sh $HOME/github/startup_script.sh