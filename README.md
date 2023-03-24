# Echo - A smart way to automate

**Echo is an AI-based Discord Bot that intelligently automates.**

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**  
   1.1. Enable "Message Content Intent" and "Server Members Intent" in Discord Developer Portal
2. OpenAI API Key
3. **[Node.js 16.9.0](https://nodejs.org/en/download/)** or higher

---

## Configuration

Go to `config.json` in `configs` folder and fill out the values:

```json
{
    "Prefix": "Put anything you want as prefix",
    "MainColor": "Put any #HexCode you want for embeds color",
    "ErrorColor": "Put any #HexCode you want for embeds color when there is an error",
    "ClientID": "Put your Bot ID/Client ID here",
    "Token": "Put your Bot Token here",
    "OpenAIapiKey": "Put your Open AI API Key here"
}
```

> **Note:** Never commit or share your token publicly

and if you want to use chatbot or moderation model fill and config `chatbot.js` and `moderation.js` in `configs` folder and (Information on how to configure them is available in the files themselves)

---

## installation

Open your terminal and install required packages with

```sh
npm install
```

After installation finishes run `node register.js` to deploy slash commands and then run `node index.js` in terminal to start the bot.

---

## Features

### Commands

* `Ask` : Answers your questions with all GPT models (**GPT-3.5-Turbo**, **Text-Davinci-003**, **Text-Curie-001**, **Text-Babbage-001**, and **Text-Ada-001**)!

* `Imagine` : Draw your imaginations with **Dall∙E**!

* `Optimize` : Optimizes your imaginations to get better response with imagine command with **GPT-3.5-Turbo**!

* `Translate` : Translate your texts in any language to any language you want with **GPT-3.5-Turbo**.

#

### Systems

* `ChatBot` : A Channel where you can talk to the bot and have ChatGPT-Style conversation with **GPT-3.5-Turbo**. (It has a temporary memory so that it can remember the contents for a short time)

* `Auto Moderation` : An Auto Mod system which checks all of  your server messages and send a log for your Admins if a message content complies with OpenAI's usage policies with **Text-Moderation-004** (moderation model is free to use and you can config it as much as you want)
