const fs = require("fs");

let json_file = {};
fs.readdirSync("./src/json")
    .filter((file) => file.endsWith(".json"))
    .forEach(
        (file) => (json_file[file.slice(0, -5)] = require(`../json/${file}`))
    );

const agents = json_file.agents;
const images = json_file.images;
const texts = json_file.texts;
const websites = json_file.websites;
const weapons = json_file.weapons;

module.exports = { agents, images, texts, websites, weapons };
