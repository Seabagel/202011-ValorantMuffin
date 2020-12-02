module.exports = {
    name: "valorant",
    execute(userInput, args) {
        helpCommand(userInput, this.name);
    },
};

const helpCommand = (userInput, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");
    const { message_tools } = require("./tools");
    // Data
    const { texts, images } = require("./JSON_helper");
    const { valorantRole } = require("../../config/Config.json");

    // Assemble embedded message
    try {
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            .setAuthor(
                userInput.author.username,
                userInput.author.displayAvatarURL({ dynamic: true })
            )
            .setTitle(`Wants to play:`)
            .setDescription(`<@&${valorantRole}>`)
            .setImage(images.valorantGif)
            .setFooter(texts.footerText, images.githubIcon);

        // Send message
        userInput.channel.send(embedded);
        message_tools.logCommand(userInput, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
