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
            } else if (message.startsWith("coom")) {
                const numbers = message.slice("coom".length).trim();
                client.commands.get("degen").execute(userInput, client, numbers);
            }
        }
    } catch (error) {
        require("./tools").message_tools.catchError(userInput, error);
    }
});

client.login(require("../../config/config.json").token);
