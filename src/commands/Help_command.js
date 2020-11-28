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
                .setColor(0x0099ff)
                .setTitle("Commands:")
                .setDescription(`\`${prefix} <command>\` <arguments>`)
                .setThumbnail(thumbnail)
                .addFields(
                    {
                        name: `\`${prefix} help\``,
                        value:
                            "What you're seeing right now, click the Command: <link> to see the github link",
                    },
                    {
                        name: `\`${prefix} roll\``,
                        value:
                            "Rolls random Agents/Weapons,\n-10 random free/contract Valorant Agent\n-5 different primary weapons\n-3 different sidearms",
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
