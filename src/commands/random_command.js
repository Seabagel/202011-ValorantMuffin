// Dependencies
const { MessageEmbed } = require("discord.js");

// JSON
const { empty, footer, thumbnails } = require("../json/templates.json");

// Functions
const { text_tools, message_tools, http_tool } = require("../js/tools");
const { githubMessage, sendMessage, catchRespond } = require("../utils/func");

module.exports = {
    name: "random",
    execute(userInput, args) {
        // Assemble embedded message
        try {
            const embedded = MessageEmbed()
                .setColor(0x0099ff)
                .setTitle("")
                .setDescription("")
                .setThumbnail(thumbnails[2])
                .addFields({
                    name: "",
                    value: "",
                })
                .addField(empty, message_tools.github(this.name))
                .setFooter(footer.text, footer.icon_url);

            // Send message
            sendMessage(userInput, embedded, this.name);
        } catch (error) {
            catchRespond(userInput);
        }
    },
};
