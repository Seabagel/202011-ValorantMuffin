const translate = require("translate");
translate.engine = "google";
translate.key = require("../../../config/config.json").API_KEY1;

module.exports = {
  name: "translate",
  execute(userInput) {
    translateCommand(userInput, this.name);
  },
};

const translateCommand = async (userInput, thisName) => {
  // Dependencies
  const { MessageEmbed } = require("discord.js");
  const { message_tools, http_tools, text_tools } = require("../tools");

  // Google API
  require("dotenv").config();

  // I'll put in the help section the codes for English, Chinese, Vietnamese, Spanish, Japanese, and French
  // mama translate en ケックル
  // mama translate vn fuck your mother
  try {
    let result = await translate("hello world", { to: "es" });
    userInput.channel.send(result);
    message_tools.logCommand(userInput, thisName);
  } catch (error) {
    message_tools.catchError(userInput, error);
  }
};
