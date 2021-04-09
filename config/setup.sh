#!/bin/sh

# sudo nano /etc/rc.local

# add startup.sh &

# add update.sh &

sudo cp /home/pi/github/Discord-MamaSlimes/update.sh /home/pi/update.sh

sudo chmod u+x /home/pi/update.sh

sh /home/pi/update.sh