// message_tools
const message_tools = {
    async github(cmdName) {
        const { prefix, githubURL } = await import("../json/Templates.json");
        return `**Command:** [${prefix} ***-${cmdName}***](${githubURL})`;
    },
    async send(userInput, embedded, commandName) {
        const { prefix } = await import("../json/Templates.json");
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
    async catchError(userInput, error) {
        const { errorMsg } = await import("../json/Templates.json");
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
        let maxA = Math.abs(max1);
        // This will never generate below zero or beyond array.length (undefined)
        return Math.floor(Math.random() * maxA);
    },
    randomIntInc(max2) {
        let maxB = Math.abs(max2);
        // This generates anywhere from zero to maximum (inclusive)
        return Math.round(Math.random() * maxB);
        return Math.floor(Math.random() * maxB + 1); // Another way to do it
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
const htttp_tools = {
    async fetchAPI(url) {
        const nodefetch = await import("node-fetch");
        let response = await nodefetch(url);
        return await response.json();
    },
    async requestPage(url) {
        const requestPromise = await import("request-promise");
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
