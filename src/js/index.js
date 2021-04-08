// Dependencies
const { Client, Collection } = require("discord.js");

// Ready message
const client = new Client();
client.once("ready", () => {
    console.log("Ready!");
    client.user.setActivity("mama -commands <args?", { type: "LISTENING" });
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
client.on("message", (userInput) => {
    const { prefix } = require("../../config/prefix.json");

    let message = userInput.content.replace(/[^a-zA-Z ]/g, "").toLowerCase();

    if (userInput.author.bot) {
        return;
    } else {
        try {
            const args = message.slice(prefix.length).trim().split(" ");
            switch (message.startsWith) {
                case prefix:
                    const cmnd = args.shift();
                    client.commands.get(cmnd).execute(userInput, args);
                    break;
                case "mick":
                    require("./mick/degen").execute(userInput, args, message);
                default:
                    break;
            }
            return;
        } catch (error) {
            require("./tools").message_tools.catchError(userInput, error);
        }
    }
});

client.login(require("../../config/config.json").token);
