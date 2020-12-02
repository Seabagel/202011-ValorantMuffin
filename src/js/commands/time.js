module.exports = {
    name: "time",
    execute(userInput, args) {
        timeCommand(userInput, args, this.name);
    },
};

const timeCommand = async (userInput, args, thisName) => {
    // Dependencies
    const { MessageEmbed } = require("discord.js");
    const cheerio = require("cheerio");
    const {
        message_tools,
        http_tools,
        text_tools,
        math_tools,
    } = require("../tools");
    // Data
    const { texts, images } = require("../JSON_helper");

    try {
        // Join args for URL
        let argsURL = args.join("+");
        let argsString = text_tools.capitalize(args.join(" "));

        // Static link to search engines
        let timeURL = `https://www.google.com/search?q=what+time+is+it+in+${argsURL}`;
        let picURL = {
            uri: `https://results.dogpile.com/serp?qc=images&q=${argsURL}`,
            method: "GET",
            headers: {
                Accept: "text/html",
                "User-Agent": "Chrome",
            },
            transform: (body) => cheerio.load(body),
        };

        // Search result which grabs timezone, date, and time
        let timeWebpage = http_tools
            .requestPage(timeURL)
            .then((res) => {
                // Returns a Promise of object containing date/time
                let $ = cheerio.load(res);
                let dateTimezone = $("span:nth-child(1)")
                    .eq(7)
                    .text()
                    .split("\n");
                let time = $("div:nth-child(1)").eq(21).text();
                return { dateTimezone, time };
            })
            .catch((err) => message_tools.catchError(userInput));

        // Search result and grab a random picture
        let pictureWebpage = http_tools
            .requestPage(picURL)
            .then((response) => {
                // Returns a Promise of picture URL
                let urls = response(".image a.link");
                let picture = urls
                    .eq(math_tools.randomIntEx(urls.length))
                    .attr("href");
                if (!urls.length) return console.log("Can't get pictures");
                return { picture };
            })
            .catch((err) => message_tools.catchError(userInput));

        await Promise.all([timeWebpage, pictureWebpage]).then((res) => {
            const resHour = res[0].time;
            const resLocation = res[0].dateTimezone[1];
            const resDate = res[0].dateTimezone[0];
            const resPicture = res[1].picture;

            // Assemble embedded message
            let embedded = new MessageEmbed()
                .setColor("dedede")
                .setAuthor("Google Search", images.googleAvatar)
                .setTitle(argsString)
                .addFields(
                    {
                        name: resHour,
                        value: resLocation,
                    },
                    {
                        name: "Date:",
                        value: resDate,
                    }
                )
                .setImage(resPicture)
                .addField(texts.empty, message_tools.github(thisName))
                .setFooter(texts.footerText, images.githubIcon);

            // Set different thumbnail based on Time-of-day
            const isNight = resHour.endsWith("PM");
            !isNight
                ? embedded.setThumbnail(images.thumbnails.timeDayCommand)
                : embedded.setThumbnail(images.thumbnails.timeNightCommand);

            // Send message
            userInput.channel.send(embedded);
            message_tools.logCommand(
                userInput,
                `${thisName} <place/country/state/city>`
            );
        });
    } catch (error) {
        message_tools.catchError(userInput, error);
    }
};
