// message_tools
const { prefix, githubURL, errorMsg } = require("../json/Templates.json");
const message_tools = {
    github(cmdName) {
        return `**Command:** [${prefix} *-${cmdName}*](${githubURL})`;
    },
    async send(userInput, embedded, commandName) {
        try {
            userInput.channel.send(embedded);
            console.log("Sending message... " + commandName);
        } catch (err) {
            console.log("Error: " + err);
        }
    },
    catchError(userInput, error) {
        userInput.channel.send(errorMsg[0]);
        userInput.channel.send(errorMsg[1]);
        console.log(error);
    },
};

// text_tools
const text_tools = {
    capitalize(str) {
        if (typeof str !== "string") return "";
        return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
    },
    containsWord(message, wordList) {
        for (let i = 0; i < wordList.length; i++) {
            if (message.includes(wordList[i])) {
                return true;
            }
        }
    },
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is inclusive and the minimum is inclusive
    },
};

// htttp_tools
const fetch = require("node-fetch");
const requestPromise = require("request-promise");
const htttp_tools = {
    async fetchAPI(url) {
        let response = await fetch(url);
        return await response.json();
    },
    async requestPage(url) {
        return await requestPromise(url)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};

module.exports = { text_tools, htttp_tools, message_tools };
