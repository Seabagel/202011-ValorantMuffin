module.exports = {
  name: "pants",
  execute(userInput) {
    pantsCommand(userInput, this.name);
  },
};

const pantsCommand = async (userInput, thisName) => {
  // Dependencies
  const { MessageEmbed } = require("discord.js");
  const cheerio = require("cheerio");
  const { message_tools, http_tools, math_tools } = require("../tools");
  // Data
  const { texts, images, pants } = require("../JSON_helper");

  try {
    // Static link to search engines
    let picURL = {
      uri: `https://results.dogpile.com/serp?qc=images&q=${math_tools.randArrayValue(
        pants.pantsType
      )}&page=${1 + math_tools.randomIntEx(4)}&sc=ceHa2ujrzSqX00`,
      method: "GET",
      headers: {
        Accept: "text/html",
        "User-Agent": "Chrome",
      },
      transform: (body) => cheerio.load(body),
    };

    // Search result and grab a random picture
    let pictureWebpage = http_tools
      .requestPage(picURL)
      .then((response) => {
        // Returns a Promise of picture URL
        let urls = response(".image a.link");
        let picture = urls.eq(math_tools.randomIntEx(urls.length)).attr("href");
        if (!urls.length) return console.log("Can't get pictures");
        return { picture };
      })
      .catch((err) => message_tools.catchError(userInput));

    await Promise.all([pictureWebpage]).then((res) => {
      const resPicture = res[0].picture;

      // Assemble embedded message
      let embedded = new MessageEmbed()
        .setColor("E67E22")
        .setAuthor("Google Images", images.googleAvatar)
        .setImage(resPicture)
        .addField(texts.empty, message_tools.github(thisName))
        .setFooter(texts.footerText, images.githubIcon);

      // Send message
      userInput.channel.send(embedded);
      message_tools.logCommand(userInput, thisName);
    });
  } catch (error) {
    message_tools.catchError(userInput, error);
  }
};
