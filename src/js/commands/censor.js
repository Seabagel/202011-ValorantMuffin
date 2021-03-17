module.exports = {
    name: "censor",
    execute(userInput, args) {
        braveCommand(userInput, this.name);
    },
};

const braveCommand = (userInput, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");
    const { message_tools} = require("../tools");
    try {
        // Assemble embedded message
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            .setTitle()

        // Send message
        userInput.channel.send(":eye: :flag_cn: :eye:");
        message_tools.logCommand(userInput, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
