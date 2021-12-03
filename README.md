# Mama-Slimes Discord.js bot (v.1.2)
### 🍨🍦☕🥞🏔🌸⛩🎌🚅 
A Discord.js Bot that does a different things

## TODO:
- [x] Update the documentation for Pants and Time of day
- [x] Document how to update, once it's been deployed in RasberryPi
- [ ] Document how to keep the process running on Linux
- [ ] Update -Help command

## Features:
   - **Case *inSenSiTIVE***
   - 🖥⌨ Gives the link to Github source code (aka this page)
   - 💂‍♂️🙏 Gives Valorant Bravery challenges
   - ⏳✔ Re-roll that doesn't include duplicates
   - 🍞🙏 Recite bible verses
   - 📆⌚ Tells you time and date, based on country/city/state

   ### Usage:
   - See [list of All Commands](https://github.com/Seabagel/Discord-MamaSlimes/blob/main/HELP.md)

# 🧰💻 How to install:
1. Install npm on your computer from [Node.JS](https://nodejs.org/en/)
2. Install [Git](https://git-scm.com/)
3. Open in a CLI like Powershell, cmd, or Bash,
   - Clone this repository using `git clone <this repository's link>`
4. Still in your CLI, change directory to the cloned repository's folder `cd <folder_name>`
5. Use `npm i` to install Node.js dependencies 
6. One of the dependencies is deprecated, install it with `npm install request --save`
7. Register a Discord Developer account, and obtain a Token to host the bot 
   - [Code Your Own Discord Bot - Basics (2020)](https://www.youtube.com/watch?reload=9&v=j_sD9udZnCk)
   - [Discord Developer Portal](https://discord.com/developers/applications)
   - [Discord Developer Docs](https://discord.com/developers/docs/intro)
8. After setting up an App on Discord Developer Portal, 
   - from the [Discord Developer Portal](https://discord.com/developers/applications), find your App, go to the Bot page, and find the Token
   - Go to the root folder of the repository, config folder, and paste your Token inside `config/config.json`
   - There's an example file inside the config folder, make a copy of it, and rename it to `config.json`
   - Give yourself a new prefix, in `prefix.json`, the default is `nega`
9. Open the root folder again, and run `node .` or `npm start`

# ♻ How to update:
1. Once deployed, we can update it through `git`
2. Reboot your device/server `sudo reboot` or switch off the machine
   - Your bot will shut down, after rebooting, we have to start it again
3. Then after rebooting, SSH to your device, then `cd ` to the MamaSlimes folder
   - Then, we gotta update the code from GitHub 
4. `git fetch`, then `git pull`
   - Fetch updates, then pulls the update to your folder
5. `npm i`
   - Install any updates to the node modules
6. `npm run start &`
   - Start the App again, and sends it to the background
   - Double enter to jump outside the logs
7. `disown -h`
   - Disown the process, and let Linux manage it
8. `exit`
   - Properly exit from your SSH
