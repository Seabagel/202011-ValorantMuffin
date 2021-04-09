#!/bin/sh

## Update repo
cd $HOME/github/Discord-MamaSlimes/
git fetch
git pull

## Update the startup script
sudo cp $HOME/github/Discord-MamaSlimes/config/startup_script.sh $HOME/startup_script.sh
sudo chmod +x $HOME/startup_script.sh

## Start Nodejs App
cd $HOME/github/Discord-MamaSlimes/
npm i
npm run start &
disown -h
exit

## Uncommit / Flush files
# rm -rf *
# git reset --hard

## Startup Chrontab
# crontab -u pi -e
# @reboot sh /etc/init.d/startup_script.sh

## bashrc
# sudo nano .bashrc
# Scroll down to the bottom and add the line: ./startup_script.sh