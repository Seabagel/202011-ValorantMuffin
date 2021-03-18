module.exports = {
  name: "translate",
  execute(userInput, args) {
    translateCommand(userInput, args, this.name);
  },
};

const translateCommand = async (userInput, args, thisName) => {
  // Dependencies
  const { MessageEmbed } = require("discord.js");
  const { message_tools, text_tools } = require("../tools");
  const { texts, images } = require("../JSON_helper");

  // Google API
  const translate = require("translate");
  translate.engine = "google";
  translate.key = require("../../../config/config.json").API_KEY1;

  try {
    // Translate the text (fromLanguage is Auto-detected)
    // http://www.lingoes.net/en/translator/langcode.html
    let toLanguage = args.shift();
    let sourceTexts = text_tools.capitalize(args.join(" "));
    let result = await translate(sourceTexts, { to: toLanguage });

    // Assemble embedded message
    let embedded = new MessageEmbed()
      .setColor("dedede")
      .setAuthor("Google Search", images.googleAvatar)
      //   .setTitle(resLocation)
      //   .addFields({
      //     name: `${resHour} ${greetings()}.`,
      //     value: resDate,
      //   })
      //   .setThumbnail(thumbnailPic)
      //   .setImage(resPicture)
      .addField(texts.empty, message_tools.github(thisName))
      .setFooter(texts.footerText, images.githubIcon);

    userInput.channel.send(result);
    message_tools.logCommand(userInput, thisName);
  } catch (error) {
    message_tools.catchError(userInput, error);
  }
};
