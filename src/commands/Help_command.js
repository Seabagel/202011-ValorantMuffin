// Dependencies
const { MessageEmbed } = require("discord.js");

// JSON
const { prefix, empty, footer, thumbnail } = require("../json/Templates.json");

// Functions
const { message_tools } = require("../js/Tools");

module.exports = {
    name: "help",
    execute(userInput, args) {
        // Assemble embedded message
        try {
            const embedded = new MessageEmbed()
                .setColor("#2ec556")
                .setTitle("Commands:")
                .setDescription(`\`${prefix} <command>\` <arguments>`)
                .setThumbnail(thumbnail)
                .addFields(
                    {
                        name: `\`${prefix} -help\``,
                        value:
                            "What you're seeing right now, click the Command: <link> to see the github link",
                    },
                    {
                        name: `\`${prefix} -choose agent\``,
                        value: "Picks a random Valorant Agent for you to play",
                    },
                    {
                        name: `\`${prefix} -choose loadout\``,
                        value:
                            "picks a Primary weapon, Armor, and Sidearm to buy",
                    }
                )
                .addField(empty, message_tools.github(this.name))
                .setFooter(footer.text, footer.icon_url);

            // Send message
            message_tools.send(userInput, embedded, this.name);
        } catch (error) {
            message_tools.catchError(userInput, error);
        }
    },
};
