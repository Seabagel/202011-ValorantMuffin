// message_tools
const { prefix, githubURL, errorMsg } = require("../json/Templates.json");
const message_tools = {
    github(cmdName) {
        return `**Command:** [${prefix} ***-${cmdName}***](${githubURL})`;
    },
    async send(userInput, embedded, commandName) {
        try {
            userInput.channel.send(embedded);
            console.log(
                `Sending ${prefix} -${commandName} \<${
                    userInput.author.username
                }@${new Date().toUTCString()}\>`
            );
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
};

const math_tools = {
    randomIntEx(max1) {
        let max = Math.abs(max1);
        // This will never generate below zero or beyond array.length (undefined)
        return Math.floor(Math.random() * max);
    },
    randomIntInc(max2) {
        let max = Math.abs(max2);
        // This generates anywhere from zero to maximum (inclusive)
        return Math.round(Math.random() * max);
        return Math.floor(Math.random() * max + 1); // Another way to do it
    },
    randomArrayInt(max3, arrSize, ascend) {
        let arr = [];
        while (arr.length < arrSize) {
            let r = this.randomIntEx(max3);
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        if (ascend) arr.sort((a, b) => a - b);
        return arr;
    },
    randArrayValue(array1) {
        return array1[this.randomIntEx(array1.length)];
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

module.exports = { text_tools, math_tools, htttp_tools, message_tools };
