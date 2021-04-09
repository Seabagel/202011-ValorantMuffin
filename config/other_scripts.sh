# https://raspberrypi.stackexchange.com/questions/15475/run-bash-script-on-startup
# https://www.youtube.com/watch?v=zRXauWUumSI
# https://askubuntu.com/questions/909024/how-to-run-script-in-rc-local
# sh $HOME/startup_script.sh

# disown -h
# exit

## Uncommit / Flush files
# rm -rf *
# git reset --hard

## Update the startup script
# sudo nano .bashrc
# Scroll down to the bottom and add the line: ./startup_script.sh
# sudo cp $HOME/github/Discord-MamaSlimes/config/startup_script.sh $HOME/startup_script.sh