require("dotenv").config();

const {REST, Routes} = require("discord.js");
const commands = [
     {
          name: "hey",
          description: "Hello my boy",
     },
     {
          name: "sayhello",
          description: "Hello my boy",
     },
     {
          name: "saysomethingfun",
          description: "You are dumb @@",
     },
];

const tilte_regist = "[REGIST]";
const tilte_err = "[ERROR]";
const rest = new REST({version: "10"}).setToken(process.env.TOKEN);
(async () => {
     try {
          console.log(`${tilte_regist}: in progress...`);
          await rest.put(
               //Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID)
               Routes.applicationCommands(process.env.CLIENT_ID)
               ,{body : commands}
          )
          console.log(`${tilte_regist}: done!`);
     } catch (error) {
          console.log(`${tilte_err}: ${error}`);
     }
})();