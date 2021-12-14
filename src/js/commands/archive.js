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
    // get message from Args
    const msgArg = args[0].trim().split("-").pop();
    const msg = await userInput.channel.messages.fetch(msgArg);
    // Get timestamp
    const d = new Date(msg.createdTimestamp);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const msgTimestamp = `${
      days[d.getDay()]
    }, ${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;

    const embedded = new MessageEmbed()
      .setColor("7289da")
      .setAuthor(
        msg.author.username,
        msg.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle(`Archived #${msg.id}`)
      .setDescription(msg.content)
      .addField("Timestamp:", msgTimestamp)
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
      .then((e) =>
        console.log("[archive] <STATUS: 201, CosmosDB entry created>")
      )
      .catch((error) => console.log(error));
  } catch (error) {
    message_tools.catchError(userInput, error);
  }
};
