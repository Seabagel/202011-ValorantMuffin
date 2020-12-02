module.exports = {
    name: "preach",
    execute(userInput, args) {
        preachCommand(userInput, this.name);
    },
};

const preachCommand = async (userInput, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");
    const { message_tools, text_tools, http_tools } = require("../tools");
    // Data
    const { images, texts, websites } = require("../JSON_helper");

    try {
        let verses = [];
        // Collect 2 bible verses
        verses[0] = http_tools
            .fetchAPI(websites.bibleAPI)
            .then((response) => response[0]);
        verses[1] = http_tools
            .fetchAPI(websites.bibleAPI)
            .then((response) => response[0]);

        await Promise.all([verses[0], verses[1]]).then((res) => {
            const Bible = res;

            // Assemble embedded message
            const embedded = new MessageEmbed()
                .setColor("#9b59b6")
                .setAuthor("Pudding says:", images.puddingAvatar)
                .setThumbnail(images.thumbnails.preachCommand)
                .addField(
                    `**${Bible[0].bookname}**\nChapter: ${Bible[0].chapter}:${Bible[0].verse}`,
                    text_tools.capitalize(Bible[0].text),
                    true
                )
                .addField(
                    `**${Bible[1].bookname}**\nChapter: ${Bible[1].chapter}:${Bible[1].verse}`,
                    text_tools.capitalize(Bible[1].text),
                    true
                )
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
