module.exports = {
    name: "degen",
    execute(userInput, client, args) {
        degenCommand(userInput, client, args, this.name);
    },
};

const degenCommand = async (userInput, client, args, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");
    const cheerio = require("cheerio");
    const { message_tools, http_tools } = require("../tools.js");
    const { texts, images } = require("../JSON_helper");

    // Use messageID to delete message
    try {
        // pageURL
        let pageURL = `https://nhentai.net/g/${args}/`;

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
                let bookTitle = $("span.pretty").eq(0).text().substring(0, 32);

                // console.log(`${imageThumb}, ${tagNumber}, ${bookTitle}`);

                return { imageThumb, tagNumber, bookTitle };
            })
            .catch((err) => message_tools.catchError(userInput));

        // let channel = client.channels.cache.find(
        //     (e) => e.id === "503889921577320448"
        // );

        const user_sky = client.users.fetch("167016935815512064");
        const user_mick = client.users.fetch("178326692832477184");
        const user_jelly = client.users.fetch("505224191813877760");

        await Promise.all([pageContent, user_sky, user_mick, user_jelly]).then(
            (result) => {
                // Assemble embedded message
                const embedded = new MessageEmbed()
                    .setColor("ED2553")
                    .setAuthor("nhentai.net", images.nhFavicon)
                    .setTitle(result[0].bookTitle)
                    .addField(`[${result[0].tagNumber}]`, `(${pageURL})`)
                    .setImage(result[0].imageThumb)
                    .setFooter(texts.footerText, images.githubIcon);

                // Send message
                result[1].send(embedded);
                result[2].send(embedded);
                result[3].send(embedded);
                message_tools.logCommand(userInput, thisName);
            }
        );
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
