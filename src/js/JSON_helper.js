const fs = require("fs");

let json_file = {};
fs.readdirSync("./src/json")
    .filter((file) => file.endsWith(".json"))
    .forEach(
        (file) => (json_file[file.slice(0, -5)] = require(`../json/${file}`))
    );

module.exports = { json_file };
