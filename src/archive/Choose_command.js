// Dependencies
const { MessageEmbed } = require("discord.js");

// JSON
const { empty, footer } = require("../json/Templates.json");
const {
    agents,
    roleName,
    roleIcon,
    agentsWikiLink,
} = require("../json/AgentsDB.json");
const { weapons } = require("../json/WeaponDB.json");

// Functions
const { message_tools, math_tools } = require("../js/Tools");

module.exports = {
    name: "choose",
    execute(userInput, args) {
        switch (args) {
            case "agent":
                let index = math_tools.randomIntEx(agents.length);
                chooseAgent(userInput, agents[index]);
                break;
            case "loadout":
                let indexPrimary = math_tools.randomIntEx(
                    weapons.primary.length
                );
                let indexArmor = math_tools.randomIntEx(weapons.armor.length);
                let indexSide = math_tools.randomIntEx(weapons.sidearms.length);
                chooseLoadout(userInput, indexPrimary, indexArmor, indexSide);
                break;
            default:
                message_tools.catchError(userInput, "Switch Defaulted");
                break;
        }
    },
};

const chooseAgent = (userInput, agent) => {
    try {
        let name = "choose agent";
        let commandName = "choosing agent: " + agent.name;
        // Assemble embedded message
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            .setAuthor(agent.name, roleIcon[agent.roleID], agentsWikiLink)
            .setDescription(roleName[agent.roleID])
            .setImage(agent.picURL)
            // .addField(empty, message_tools.github(name))
            .setFooter(footer.text, footer.icon_url);
        // Send message
        message_tools.send(userInput, embedded, commandName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};

const chooseLoadout = (userInput, indexPrimary, indexArmor, indexSide) => {
    try {
        let name = "choose loadout";
        let commandName = `Loadout: ${weapons.primary[indexPrimary]}, ${weapons.armor[indexArmor]}, ${weapons.sidearms[indexSide]}`;
        // Assemble embedded message
        const embedded = new MessageEmbed()
            .setColor("ff4655")
            // .setAuthor("Loadouts", weapons.icon, weapons.wikiLink)
            .setThumbnail(weapons.sidearmsThumb[indexSide])
            // Primary weapon
            .setTitle("Primary:")
            .setDescription(weapons.primary[indexPrimary])
            .addFields(
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
            .setImage(weapons.primaryThumb[indexPrimary])
            // .addField(empty, message_tools.github(name))
            .setFooter(footer.text, footer.icon_url);
        // Send message
        message_tools.send(userInput, embedded, commandName);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
