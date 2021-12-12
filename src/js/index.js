// Dependencies
const { Client, Collection } = require("discord.js");

// Ready message
const client = new Client();
client.once("ready", (ready) => {
    const ready_msg = `[READY] \<MamaSlimes@${new Date().toUTCString()}\>`;
    console.log(ready_msg);
    client.channels.fetch("729447818791485442").then(e => e.send(ready_msg))
    // client.channels.fetch("785813207389306890").then(e => e.send(ready_msg))
    // client.channels.fetch("694920058882883624").then(e => e.send(ready_msg))
    // client.channels.fetch("808047234242445342").then(e => e.send(ready_msg))
    client.user.setActivity("mama -commands ?args", { type: "LISTENING" });
});

// Get commands dynamically
client.commands = new Collection();
const fs = require("fs");
fs.readdirSync("./src/js/commands")
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    });

// Activate on message event
client.on("message", async (userInput) => {
    const { prefix } = require("../../config/prefix.json");

    let message = userInput.content.toLowerCase();

    try {
        if (userInput.author.bot) {
            return;
        } else {
            if (message.startsWith(prefix)) {
                let regex = message.replace(/[^a-zA-Z ]/g, "");
                let args = regex.slice(prefix.length).trim().split(" ");
                let cmnd = args.shift();
                client.commands.get(cmnd).execute(userInput, args);
                console.log(message)
                console.log(message.channel)
                console.log(message.channel.messages.fetch("729447818791485442-919414184977002556"))
                console.log(message.channel.fetchMessage("729447818791485442-919414184977002556"))
            }
        }
    } catch (error) {
        require("./tools").message_tools.catchError(userInput, error);
    }
});

client.login(require("../../config/config.json").token);
