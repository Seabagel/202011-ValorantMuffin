module.exports = {
    name: "help",
    execute(userInput, args) {
        helpCommand(userInput, this.name);
    },
};

const helpCommand = (userInput, args) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");

    // JSON
    const {
        prefix,
        empty,
        footer,
        thumbnail,
    } = require("../json/Templates.json");

    // Functions
    const { message_tools } = require("./Tools");

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
                        "Rolls a set of *random* `Agents` and `Weapons` to use for the entire match\n - 3 free and 3 contract Valorant `Agents` \n - 3 different `primary` weapons\n - 2 different `sidearms` (pistols)",
                },
                {
                    name: `\`${prefix} brave\``,
                    value:
                        "Need a *better* `weapon`? Be brave and **roll** for a `single round`. You *might* get a different weapon, but you'll have to use it **until the round ends**",
                }
            )
            .addField(empty, message_tools.github(this.name))
            .setFooter(footer.text, footer.icon_url);

        // Send message
        message_tools.send(userInput, embedded, this.name);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
