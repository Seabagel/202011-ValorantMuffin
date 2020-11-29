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
    const { empty, footer } = require("../json/Templates.json");

    const { weapons } = require("../json/WeaponDB.json");
    const { urlDB } = require("../json/UrlDB.json");

    // Functions
    const { message_tools, math_tools } = require("../js/Tools");

    try {
        let indexPrimary = math_tools.randomIntEx(weapons.primary.length);
        let indexArmor = math_tools.randomIntEx(weapons.armor.length);
        let indexSide = math_tools.randomIntEx(weapons.sidearms.length);

        // Assemble embedded message
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            .setThumbnail(urlDB.sidearmsThumb[indexSide])
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
            .setImage(urlDB.primaryThumb[indexPrimary])
            .addField(empty, message_tools.github(thisName))
            .setFooter(footer.text, footer.icon_url);

        // Send message
        message_tools.send(userInput, embedded, thisName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
