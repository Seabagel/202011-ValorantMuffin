// Dependencies
const { Client, Collection } = require("discord.js");

// Ready message
const client = new Client();
client.once("ready", () => {
    console.log("Ready!");
});

// Get commands dynamically
client.commands = new Collection();
const fs = require("fs");
fs.readdirSync("./src/js")
    .filter((file) => file.startsWith("command_"))
    .forEach((file) => {
        const command = require(`./${file}`);
        client.commands.set(command.name, command);
    });

// Activate on message event
client.on("message", (userInput) => {
    const { texts } = require("./JSON_helper");
    const prefix = texts.prefix;

    let message = userInput.content.replace(/[^a-zA-Z ]/g, "").toLowerCase();

    if (!message.startsWith(prefix) || userInput.author.bot) return;

    const args = message.slice(prefix.length).trim().split(" ");
    const cmnd = args.shift();

    try {
        client.commands.get(cmnd).execute(userInput);
    } catch (error) {
        const { message_tools } = require("./tools");
        message_tools.catchError(userInput, error);
    }
});

client.login(require("../../config/Config.json").token);
