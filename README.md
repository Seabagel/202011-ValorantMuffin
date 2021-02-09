# Mama-Slimes Discord.js bot (v.1.2)
### 🍨🍦☕🥞🏔🌸⛩🎌🚅 
A Discord.js Bot that does a different things

## TODO:
- [x] Update the documentation for Pants and Time of day
- [x] Add how to update it, once it's been deployed in RasberryPi
- [ ] Add how to deploy it, and keep the process running on Linux

## Features:
   - **Case *inSenSiTIVE***
   - 🖥⌨ Gives the link to Github source code (aka this page)
   - 💂‍♂️🙏 Gives Valorant Bravery challenges
   - ⏳✔ Re-roll that doesn't include duplicates
   - 🍞🙏 Recite bible verses
   - 📆⌚ Tells you time and date, based on country/city/state

   ### Usage:
   > Type "prefix" <command> <sub_command> in your discord chatbox

## General Commands
   ### 🐙 **-help**
   > `"prefix -help"` responds by giving a list of all available commands,
   - Every command will also give you a link to the github page, at the bottom of each response

   ### 📆 **-time**
   > `"prefix time" <name_of_country/city/state>`
   - Gives the time of day, time, and date in a location
   - Can also be abused to look up pants
   - "pudding -time Japan" gives you the time in Japan's capital city, Tokyo
   - "pudding -time Jacksonville" gives you the time in Jacksonville, Florida
   - "pudding -time Iowa" gives you the time in Iowa's capital city

### 👖🩳 **-pants**
   > `"prefix pants"`
   - Gives you a random picture of pants

   ### ☦ **-preach**
   > `"prefix preach" <name_of_country/city/state>`
   - sends a random bible verse, plus the bookname, chapter, and number

## 👮‍♂️💂‍♂️ Valorant Bravery Commands
   ### 🎲🥞 **-roll** 
   > `"prefix roll"` 
   - Rolls a set of *random* `Agents` and `Weapons` to use <ins>for the entire match</ins>
   - 3 free and 3 contract Valorant `Agents`
   - 3 different `primary` weapons 
   - 2 different `sidearms` (pistols)
   ### 🚒🔥 **-brave**
   > `"prefix brave"` 
   - Need a *better* weapon? Be brave and **roll** for a `single round`. 
   - You *might* get a different weapon, but you'll have to use it <ins>until the round ends</ins>

# 🧰💻 How to install:
1. Install npm on your computer from [Node.JS](https://nodejs.org/en/)
2. Install [Git](https://git-scm.com/)
3. Open in a CLI like Powershell, cmd, or Bash,
   - Clone this repository using `git clone <this repository's link>`
4. Still in your CLI, change directory to the cloned repository's folder `cd <folder_name>`
5. Use `npm i` to install Node.js dependencies 
6. Register a Discord Developer account, and obtain a Token to host the bot 
   - [Code Your Own Discord Bot - Basics (2020)](https://www.youtube.com/watch?reload=9&v=j_sD9udZnCk)
   - [Discord Developer Portal](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications)
7. After setting up an App on Discord Developer Portal, 
   - Go to the root folder of the repository, and paste your Token inside `config/config.json`
   - There's an example file inside the config folder, rename it to `config.json`
   - Give yourself a new prefix, in `prefix.json`, the default is `nega`
8. Open the root folder again, and run `node .` or `npm start`

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