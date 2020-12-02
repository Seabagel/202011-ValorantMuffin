# MamaSlimesBOT
### 🍨🍦☕🥞🏔🌸⛩🎌🚅 
A Discord.js Bot that does a different things

1. ## Features:
   - **Case *inSenSiTIVE***
   - 🖥⌨ Gives the link to Github source code (aka this page)
   - 💂‍♂️🙏 Gives Valorant Bravery challenges
   - ⏳✔ Re-roll that doesn't include duplicates
   - 🍞🙏 Recite bible verses
   - 📆⌚ Tells you time and date, based on country/city/state

   2. ### Usage:
   > Type "prefix" <command> <sub_command> in your discord chatbox

1. ## General Commands
   1. ### 🐙 **-help**
   > `"prefix -help"` responds by giving a list of all available commands,
   - Every command will also give you a link to the github page, at the bottom of each response

   1. ### 📆 **-time**
   > `"prefix time" <name_of_country/city/state>`
   - "pudding -time Japan" gives you the time in Japan's capital city, Tokyo
   - "pudding -time Jacksonville" gives you the time in Jacksonville, Florida
   - "pudding -time Iowa" gives you the time in Iowa's capital city

   1. ### ☦ **-preach**
   > `"prefix preach" <name_of_country/city/state>`
   - sends a random bible verse, plus the bookname, chapter, and number

1. ## 👮‍♂️💂‍♂️ Valorant Bravery Commands
   1. ### 🎲🥞 **-roll** 
   > `"prefix roll"` 
   - Rolls a set of *random* `Agents` and `Weapons` to use <ins>for the entire match</ins>
   - 3 free and 3 contract Valorant `Agents`
   - 3 different `primary` weapons 
   - 2 different `sidearms` (pistols)
   1. ### 🚒🔥 **-brave**
   > `"prefix brave"` 
   - Need a *better* weapon? Be brave and **roll** for a `single round`. 
   - You *might* get a different weapon, but you'll have to use it <ins>until the round ends</ins>

# How to install:
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
8. Open the root folder again, and run `node .` or `npm start`
