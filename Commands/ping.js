const Discord = require("discord.js")

module.exports = {
    
    name : "ping", 
    description : "affiche la latence.",
    permissions : "Aucune",
    dm :  true,

    async run(bot , messsage, argv){
        await messsage.reply(`Pong : \`${bot.ws.ping}\``)
    }
}