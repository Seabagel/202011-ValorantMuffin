let execute = (userInput, args, message) => {
    const numbers = message.slice("mick".length).trim().split(" ").args.shift();

    try {
        // Dependencies
        const { MessageEmbed } = require("discord.js");
        const cheerio = require("cheerio");
        const { message_tools, http_tools } = require("./tools.js");

        // pageURL
        let pageURL = `https://nhentai.net/g/${numbers}/`;

        let pageContent = http_tools
            .requestPage(pageURL)
            .then((res) => {
                // Returns a Promise of object containing date/time
                let $ = cheerio.load(res);
                // document.getElementsByClassName("lazyload")[0].src
                // image:
                let imageThumb = $("img.lazyload").eq(0).attr("data-src");
                // document.getElementById("gallery_id").innerText
                let tagNumber = $("h3#gallery_id").text();
                // document.getElementsByClassName("title")[0].innerText
                let bookTitle = $("h1.title").eq(0).text();

                console.log(`${imageThumb}, ${tagNumber}, ${bookTitle}`);
                console.log();
                console.log();

                return { imageThumb, tagNumber, bookTitle };
            })
            .catch((err) => message_tools.catchError(userInput));

            await Promise.all([pageContent]).then((res) => {
                // Assemble embedded message
                const embedded = new MessageEmbed()
                .setColor("ff4655")
                .setTitle("nhentai.net")
                .addField("#354384");

                // Send message
                userInput.channel.send(":eye: :flag_cn: :eye:");
                message_tools.logCommand(userInput, thisName);
            })
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};

module.exports = execute();
