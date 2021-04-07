module.exports = {
    name: "help",
    execute(userInput, args) {
        helpCommand(userInput, this.name);
    },
};

const helpCommand = (userInput, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");
    const { message_tools } = require("../tools");
    // Data
    const { texts, images } = require("../JSON_helper");

    // Assemble embedded message
    try {
        const embedded = new MessageEmbed()
            .setColor(0x0099ff)
            .setTitle("Github")
            .addField("List of All Commands:", " See all available commands and description of what they do, below:")
            .addField(texts.empty, message_tools.github(thisName))
            .setThumbnail(images.helpThumbnail)
            .setFooter(texts.footerText, images.githubIcon);

        // Send message
        userInput.channel.send(embedded);
        message_tools.logCommand(userInput, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
