#!/bin/sh

## Variables
git_dir="$HOME/github/Discord-MamaSlimes/"
script_dir="$HOME/github/Discord-MamaSlimes/config/startup_script.sh"
modsh_dir="/etc/init.d/startup_script.sh"

## Update repo
cd git_dir
git fetch
git pull

## Update the startup script
sudo cp script_dir modsh_dir
sudo chmod +x modsh_dir
sudo update-rc.d modsh_dir defaults

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