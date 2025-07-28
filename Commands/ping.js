const Discord = require("discord.js")

module.exports = {
    name : "ping", 
    async run(bot , messsage){
        await messsage.reply(`Pong : \`${bot.ws.ping}\``)
    }
}