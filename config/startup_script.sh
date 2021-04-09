#!/bin/sh
cd $HOME/github/Discord-MamaSlimes/
git fetch
git pull
npm i
npm run start &
disown -h
exit

# rm -rf *
# git reset --hard

# sudo cp $HOME/github/Discord-MamaSlimes/config/startup_script.sh $HOME/github/startup_script.sh
# sudo chmod +x $HOME/github/startup_script.sh
# sh $HOME/github/startup_script.sh

# crontab -u pi -e
# @reboot sh $HOME/github/startup_script.sh
# exit