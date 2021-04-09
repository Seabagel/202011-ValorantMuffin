#!/bin/sh

## 1-time setup

# Add script to rc.local
# sudo nano /etc/rc.local
# /home/pi/startup.sh &

# Copy script from github to home
# cp /home/pi/github/Discord-MamaSlimes/startup.sh /home/pi/startup.sh
# sudo chmod u+x /home/pi/startup.sh

cd $HOME/github/Discord-MamaSlimes/

git pull

npm i

npm start &

exit 0