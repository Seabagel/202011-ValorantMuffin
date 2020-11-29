module.exports = {
    name: "roll",
    execute(userInput) {
        chooseLoadout(userInput, this.name);
    },
};

const chooseLoadout = (userInput, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");

    // JSON
    const { empty, footer } = require("../json/Templates.json");
    const { agents } = require("../json/AgentsDB.json");
    const { weapons } = require("../json/WeaponDB.json");
    const { urlDB } = require("../json/UrlDB.json");

    // Functions
    const { message_tools, math_tools } = require("./Tools");

    try {
        // Make array of the values to process
        let valueArray = Array(4).fill("");
        let dbArray = [
            agents.freeAgents,
            agents.contractAgents,
            weapons.primary,
            weapons.sidearms,
        ];
        let sizeArr = [3, 3, 3, 2];

        // Create strings, random unique values from databse
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
                userInput.author.username,
                userInput.author.displayAvatarURL({ dynamic: true })
            )
            .setThumbnail(math_tools.randArrayValue(urlDB.agentsTopCrop))
            .setTitle("Agents:")
            .addFields(
                {
                    name: "3 free agents,",
                    value: valueArray[0],
                    inline: true,
                },
                {
                    name: "3 contract agents:",
                    value: valueArray[1],
                    inline: true,
                },
                {
                    name: "Weapons",
                    value: "Choose any of these:",
                },
                {
                    name: "Primary,",
                    value: valueArray[2],
                    inline: true,
                },
                {
                    name: "Sidearms:",
                    value: valueArray[3],
                    inline: true,
                }
            )
            .addField(empty, message_tools.github(thisName))
            .setFooter(footer.text, footer.icon_url);

        // Send message
        message_tools.send(userInput, embedded, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
