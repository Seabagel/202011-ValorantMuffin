module.exports = {
    name: "brave",
    execute(userInput, args) {
        chooseLoadout(userInput, this.name);
    },
};

const chooseLoadout = (userInput, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");

    // JSON
    const message = require("./JSON_helper").message;
    const image_url = require("./JSON_helper").image_url;
    const weapons = require("./JSON_helper").page_urls;

    // Functions
    const { message_tools, math_tools } = require("./tools");

    try {
        let indexPrimary = math_tools.randomIntEx(weapons.primary.length);
        let indexArmor = math_tools.randomIntEx(weapons.armor.length);
        let indexSide = math_tools.randomIntEx(weapons.sidearms.length);

        // Assemble embedded message
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            .setThumbnail(image_url.sidearms_thumb[indexSide])
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
            .setImage(image_url.primary_thumb[indexPrimary])
            .addField(empty, message_tools.github(thisName))
            .setFooter(message.footerText, image_url.icon_github);

        // Send message
        message_tools.send(userInput, embedded, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
