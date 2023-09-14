require("dotenv").config();
const express = require("express");
const app = express();

app.listen("3000", () => {
     console.log("bot is running");
});

const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
     intents : [
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.Guilds
     ]
});

client.on("ready", () => {
     console.log("Im ready !!");
})

client.on("messageCreate", (msg) => {
     if(msg.content === "ping")
          msg.reply("what name!!");
});

client.on("interactionCreate", async (interaction) => {
     await interaction.deferReply();
     if(!interaction.isChatInputCommand()) return;
     var commandName = interaction.commandName
     switch(commandName){
          case "hey":
               interaction.reply("hey boy");
               break;
          case "sayhello":
               interaction.reply(`Hello`);
               break;
          case "saysomethingfun":
               interaction.reply(`you are dumb ~~`);
               break;
     }
});

client.login(process.env.TOKEN);
