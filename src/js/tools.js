// message_tools
const message_tools = {
  github(cmdName) {
    const { websites } = require("./JSON_helper");
    return `**Command:** [***-${cmdName}***](${websites.githubPage})`;
  },
  logCommand(userInput, commandName) {
    console.log(
      `[${commandName}] \<${
        userInput.author.username
      }@${new Date().toUTCString()}\>`
    );
  },
  catchError(userInput, error) {
    const { texts } = require("./JSON_helper");
    userInput.channel.send(texts.errorHelp);
    console.log(error);
  },
  pingRole(userInput, roleName) {
    userInput.channel.send(`<@&${roleName}>`);
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

// http_tools
const http_tools = {
  async fetchAPI(url) {
    const nodefetch = require("node-fetch");
    let response = await nodefetch(url);
    return await response.json();
  },
  async requestPage(url) {
    const requestPromise = require("request-promise");
    return await requestPromise(url)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = {
  text_tools,
  math_tools,
  http_tools,
  message_tools,
};
