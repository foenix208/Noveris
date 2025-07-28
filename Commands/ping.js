const Discord = require("discord.js")

module.exports = {
    
    name : "ping", 
    description : "affiche la latence",
    permissions : "Aucune",
    dm :  true,


    async run(bot , messsage){
        await messsage.reply(`Pong : \`${bot.ws.ping}\``)
    }
}