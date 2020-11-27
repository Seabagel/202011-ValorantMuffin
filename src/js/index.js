// Dependencies
const fs = require("fs");
const { Client, Collection } = require("discord.js");

// JSON
const { token } = require("../../config/config.json");
const { prefix } = require("../json/templates.json");

// Functions
const { message_tools } = require("./tools");

// Client
const client = new Client();
client.commands = new Collection();

// Get commands dynamically
fs.readdirSync("./src/commands")
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    });

// Ready message
client.once("ready", () => {
    console.log("Ready!");
});

// Activate on message event
client.on("message", async (userInput) => {
    let message = userInput.content.replace(/[^a-zA-Z ]/g, "").toLowerCase();

    if (!message.startsWith(prefix) || userInput.author.bot) return;

    const args = message.slice(prefix.length).trim().split(" ");
    const cmnd = args.shift();

    try {
        client.commands.get(cmnd).execute(userInput, args);
    } catch (error) {
        message_tools.catchError(userInput);
    }
});

client.login(token);
