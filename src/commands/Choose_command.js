// Dependencies
const { MessageEmbed } = require("discord.js");

// JSON
const { empty, footer } = require("../json/Templates.json");
const {
    agents,
    roleName,
    roleIcon,
    wikiLink,
} = require("../json/AgentsDB.json");

// Functions
const { message_tools, text_tools } = require("../js/Tools");

module.exports = {
    name: "choose",
    execute(userInput, args) {
        switch (args) {
            case "agent":
                let index = text_tools.getRandomInt(agents.length);
                console.log("Length = " + agents.length);
                console.log("Random index = " + index);
                chooseAgent(userInput, agents[index]);
                break;
            case "loadout":
                message_tools.send(
                    userInput,
                    "`loadout` command isn't implemented yet",
                    this.name
                );
                break;
            default:
                console.log("Sent to Default");
                message_tools.send(userInput, "Sent to Default", this.name);
                break;
        }
    },
};

const chooseAgent = (userInput, agent) => {
    let name = "choose agent";
    let commandName = "choosing agent: " + agent.name;
    // Assemble embedded message
    const embedded = new MessageEmbed()
        .setColor("ff4655")
        .setAuthor(agent.name, roleIcon[agent.roleID], wikiLink)
        .setDescription(roleName[agent.roleID])
        .setImage(agent.picURL)
        .setFooter(footer.text, footer.icon_url);

    // Send message
    message_tools.send(userInput, embedded, commandName);
};

// const chooseAgent = (userInput, agent) => {
//     let name = "choose agent";
//     let commandName = "choosing agent: " + agent.name;
//     // Assemble embedded message
//     const embedded = new MessageEmbed()
//         .setColor("ff4655")
//         .setAuthor(agent.name, roleIcon[agent.roleID], wikiLink)
//         .setDescription(roleName[agent.roleID])
//         // .setThumbnail(agent.thumbURL)
//         // .addFields({
//         //     name: "test",
//         //     value: "test",
//         // })
//         .setImage(agent.picURL)
//         // .addField(empty, message_tools.github(name))
//         .setFooter(footer.text, footer.icon_url);

//     // Send message
//     message_tools.send(userInput, embedded, commandName);
// };
