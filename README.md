# 202011-VirtualMuffin
🤠🔫🍨🍦☕🥞 Discord.js bot that gives Valorant challenges

### Usage:
> Type "muffin" <command> <sub_command> in your discord chatbox

1. 🐙 **-help**
   - `"muffin -help"` responds by giving a list of all available commands,
   - Every command will also give you a link to the github page, at the bottom of each response

2. 🍰 **-choose**
   - `"muffin -choose agent"` picks a random Valorant Agent for you to play
   - `"muffin -choose loadout"` picks a Primary weapon, Armor, and Sidearm to buy

3. ⏳ Coming soon: Re-roll that doesn't include duplicates


## Features:
- [x] **Case *inSenSiTIVE***
- [x] 🖥⌨ Gives the link to Github source code (aka this page)
- [x] 💂‍♂️🙏 Gives Valorant "Bravery" challenges

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
