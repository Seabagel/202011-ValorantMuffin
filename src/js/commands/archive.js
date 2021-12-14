module.exports = {
  name: "archive",
  execute(userInput, args) {
    archiveCommand(userInput, args, this.name);
  },
};

const archiveCommand = async (userInput, args, thisName) => {
  // Dependencies
  const { MessageEmbed } = require("discord.js");
  const { message_tools, archive_create_entry } = require("../tools");
  // Data
  const { texts, images } = require("../JSON_helper");
  const fetch = require("node-fetch");

  // Assemble embedded message
  try {
    // get message
    const msgArg = args[0].trim().split("-").pop();
    const msg = await userInput.channel.messages.fetch(msgArg);
    const msgTimestamp = new Date(msg.createdTimestamp).toUTCString();

    const embedded = new MessageEmbed()
      .setColor("7289da")
      .setAuthor(
        msg.author.username,
        msg.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle(`Archived #${msg.id} from ${msgTimestamp}`)
      .setDescription(msg.content)
      .addField(texts.empty, message_tools.github(thisName))
      .setFooter(texts.footerText, images.githubIcon);

    // Send message
    userInput.channel.send(embedded);
    message_tools.logCommand(userInput, thisName);

    // Send POST to Azure functions API
    await fetch(
      `${process.env.API_URL}/create_entry?message_id=${msg.id}&username=${
        msg.author.username
      }&msgbody=${
        msg.content
      }&timestamp=${msgTimestamp}&pictureURL=${msg.author.displayAvatarURL({
        dynamic: true,
      })}`
    )
      .then((e) => console.log("Success"))
      .catch((error) => console.log(error));
  } catch (error) {
    message_tools.catchError(userInput, error);
  }
};
