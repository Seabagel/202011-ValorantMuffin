// Dependencies
const fs = require("fs");
const { Client, Collection } = require("discord.js");

// JSON
const { token } = require("../../config/Config.json");
const { prefix } = require("../json/Templates.json");

// Functions
const { message_tools } = require("./Tools");

// Client
const client = new Client();
client.commands = new Collection();

// Get commands dynamically
fs.readdirSync("./src/commands")
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
        const command = require(`../commands/${file}`);
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
    const arg = args[0];

    try {
        client.commands.get(cmnd).execute(userInput, arg);
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
});

client.login(token);
