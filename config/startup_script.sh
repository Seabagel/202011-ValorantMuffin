#!/bin/sh

## Update repo
cd $HOME/github/Discord-MamaSlimes/
git fetch
git pull

## Update the startup script
sudo cp $HOME/github/Discord-MamaSlimes/config/startup_script.sh /etc/init.d/startup_script.sh
sudo chmod +x /etc/init.d/startup_script.sh
sudo update-rc.d startup_script.sh defaults

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
# @reboot sh /etc/init.d/startup_script.sh