// Dependencies
const { MessageEmbed } = require("discord.js");

// JSON
const { empty, footer } = require("../json/Templates.json");
const { agents } = require("../json/AgentsDB.json");
const { weapons } = require("../json/WeaponDB.json");

// Functions
const { message_tools, math_tools } = require("../js/Tools");

module.exports = {
    name: "roll",
    execute(userInput) {
        chooseLoadout(userInput, this.name);
    },
};

const chooseLoadout = (userInput, thisName) => {
    try {
        let consoleMessage = `Name username Rolling, timestamp@123123`;

        let valueArray = Array(4).fill("");
        let dbArray = [
            agents.freeAgents,
            agents.contractAgents,
            weapons.primary,
            weapons.sidearms,
        ];
        let sizeArr = [4, 5, 5, 3];

        for (let i = 0; i < valueArray.length; i++) {
            math_tools
                .randomArrayInt(dbArray[i].length, sizeArr[i], true)
                .forEach((v) => {
                    valueArray[i] += `- ${dbArray[i][v]}\n`;
                });
        }

        // Assemble embedded message
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            .setAuthor(
                "SneakyOdin (Bagel)",
                "https://avatars0.githubusercontent.com/u/25069224?s=400&u=262929739f385e4bd20a9d85c86f06417c25c447&v=4",
                agentsWikiLink
            )
            .setTitle("Agents:")
            .setThumbnail(
                "https://static.wikia.nocookie.net/valorant/images/0/06/Omen_artwork.png/revision/latest/top-crop/width/200/height/150?cb=20200602020233"
            )
            .addFields(
                {
                    name: "1. Free Agents:",
                    value: valueArray[0],
                    inline: true,
                },
                {
                    name: "2. Contract Agents:",
                    value: valueArray[1],
                    inline: true,
                },
                {
                    name: empty,
                    value: "Weapons:",
                },
                {
                    name: "3. Primary Weapon:",
                    value: valueArray[2],
                    inline: true,
                },
                {
                    name: "4. Sidearm:",
                    value: valueArray[3],
                    inline: true,
                }
            )
            .addField(empty, message_tools.github(thisName))
            .setFooter(footer.text, footer.icon_url);

        // Send message
        message_tools.send(userInput, embedded, consoleMessage);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
