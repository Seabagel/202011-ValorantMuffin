// module.exports = {
//   name: "archive",
//   execute(userInput, args) {
//     archiveCommand(userInput, args, this.name);
//   },
// };

// const archiveCommand = async (userInput, args, thisName) => {
//   // Dependencies
//   const { MessageEmbed } = require("discord.js");
//   const { message_tools, archive_api } = require("../tools");
//   // Data
//   const { texts, images } = require("../JSON_helper");

//   // Assemble embedded message
//   try {
//     // get message
//     const msg = await userInput.channel.messages.fetch(args[0]);

//     await Promise.all(msg).then((res) => {
//       console.log(res[0][1].id);
//       console.log(res[0][1].author.username);
//       console.log(res[0][1].author.displayAvatarURL({ dynamic: true }));
//       console.log(new Date(res[0][1].createdTimestamp).toUTCString());
//       console.log(res[0][1].content);
//       //   console.log(res[0].author);
//       const embedded = new MessageEmbed()
//         .setColor("ff4655")
//         .setAuthor(
//           "test"
//           //   res[0].message.author,
//           //   res[0].message.author.displayAvatarURL({ dynamic: true })
//         )
//         // .setTitle(`${res[1].toUTCString()}`)
//         .setDescription(`Message has been archived`)
//         .addField(texts.empty, message_tools.github(thisName))
//         .setFooter(texts.footerText, images.githubIcon);

//       // Send message
//       userInput.channel.send(embedded);
//       message_tools.logCommand(userInput, thisName);
//     });
//   } catch (error) {
//     message_tools.catchError(userInput, error);
//   }
// };
