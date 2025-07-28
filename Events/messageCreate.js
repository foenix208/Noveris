const Discord = require("discord.js")

module.exports = async (bot, message) => {
    let prefix = "?"
    let messageArray = message.content.split(" ")
    
    let commandName = messageArray[0].slice(prefix.length)
    let argv = messageArray.slice(1)
    if (!message.content.startsWith(prefix)) return;

    try
    {
        let command = require(`../Commands/${commandName}`)
        command.run(bot,message,argv)
    }catch(error){
        return message.reply(`❌ La commande \`${commandName}\` n'existe pas.`)
    }
    //if(!command) return message.reply(`La commande ${commandName} n'existe pas`)
    
}
