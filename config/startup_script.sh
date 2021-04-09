#!/bin/sh
cd $HOME/github/Discord-MamaSlimes/
git fetch
git pull
npm i
npm run start &
disown -h

# rm -rf *
# chmod +x ~/github/Discord-MamaSlimes/config/startup_script.sh
# sh ~/github/Discord-MamaSlimes/config/startup_script.sh
# crontab -u pi -e
# @reboot sh ~/github/Discord-MamaSlimes/config/startup_script.sh
# exit