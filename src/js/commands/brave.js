module.exports = {
    name: "brave",
    execute(userInput) {
        braveCommand(userInput, this.name);
    },
};

const braveCommand = (userInput, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");
    const { message_tools, math_tools } = require("../tools");
    // Data
    const { images, texts, weapons } = require("../JSON_helper");

    try {
        let indexPrimary = math_tools.randomIntEx(weapons.primary.length);
        let indexArmor = math_tools.randomIntEx(weapons.armor.length);
        let indexSide = math_tools.randomIntEx(weapons.sidearms.length);

        // Assemble embedded message
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            .setThumbnail(images.sidearmsIcon[indexSide])
            .setAuthor(
                userInput.author.username,
                userInput.author.displayAvatarURL({ dynamic: true })
            )
            .addFields(
                {
                    name: "Primary Weapon:",
                    value: weapons.primary[indexPrimary],
                },
                {
                    name: "Armor:",
                    value: weapons.armor[indexArmor],
                    inline: true,
                },
                {
                    name: "Sidearm:",
                    value: weapons.sidearms[indexSide],
                    inline: true,
                }
            )
            .setImage(images.primaryIcon[indexPrimary])
            .addField(texts.empty, message_tools.github(thisName))
            .setFooter(texts.footerText, images.githubIcon);

        // Send message
        userInput.channel.send(embedded);
        message_tools.logCommand(userInput, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
