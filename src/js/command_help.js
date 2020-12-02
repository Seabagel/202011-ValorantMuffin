module.exports = {
    name: "help",
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
    const prefix = texts.prefix;

    // Assemble embedded message
    try {
        const embedded = new MessageEmbed()
            .setColor(0x0099ff)
            .setTitle("Commands:")
            .setDescription(`\`${prefix} <command>\` <arguments>`)
            .setThumbnail(images.helpThumbnail)
            .addFields(
                {
                    name: `\`${prefix} help\``,
                    value:
                        "What you're seeing right now, click the Command: <link> to see the github link",
                },
                {
                    name: `\`${prefix} roll\``,
                    value:
                        "Rolls a set of *random* `Agents` and `Weapons` to use for the entire match\n - 3 free and 3 contract Valorant `Agents` \n - 3 different `primary` weapons\n - 2 different `sidearms` (pistols)",
                },
                {
                    name: `\`${prefix} brave\``,
                    value:
                        "Need a *better* `weapon`? Be brave and **roll** for a `single round`. You *might* get a different weapon, but you'll have to use it **until the round ends**",
                }
            )
            .addField(texts.empty, message_tools.github(thisName))
            .setFooter(texts.footerText, images.githubIcon);

        // Send message
        userInput.channel.send(embedded);
        message_tools.logCommand(userInput, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
