const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents });

const loaderCommands = require("./Loaders/loadeCommands");
const loaderEvents = require("./Loaders/loadeEvents");
const config = require("./config");

bot.commands = new Discord.Collection();

// Fonction async auto-exécutée pour gérer l'initialisation proprement
(async () => {
    await loaderCommands(bot);
    await loaderEvents(bot);
    await bot.login(config.token);
})();
