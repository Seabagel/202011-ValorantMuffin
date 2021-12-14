module.exports = {
  name: "archive",
  execute(userInput, args) {
    archiveCommand(userInput, args, this.name);
  },
};

const archiveCommand = async (userInput, args, thisName) => {
  // Dependencies
  const { MessageEmbed } = require("discord.js");
  const { message_tools, archive_api } = require("../tools");
  // Data
  const { texts, images } = require("../JSON_helper");

  // Assemble embedded message
  try {
    // get message
    const msgArg = args[0].trim().split("-").pop();
    const msg = await userInput.channel.messages.fetch(msgArg);

    const embedded = new MessageEmbed()
      .setColor("ff4655")
      .setAuthor(
        msg.author.username,
        msg.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle(
        `Archived #${msg.id} from ${new Date(msg.createdTimestamp).toUTCString()}`
      )
      .setDescription(msg.content)
      .addField(texts.empty, message_tools.github(thisName))
      .setFooter(texts.footerText, images.githubIcon);

    // Send message
    userInput.channel.send(embedded);
    message_tools.logCommand(userInput, thisName);
  } catch (error) {
    message_tools.catchError(userInput, error);
  }
};
