const Discord = require("discord.js")

module.exports = { 
    name : "ban", 
    description : "Commande pour  bannir un membre du serveur.",
    permissions : Discord.PermissionFlagsBits.BanMembers,
    dm : false,
    options: [
        {
            type : "user",
            name : "membre",
            description : "Le membre a bannir",
            required : true
        },
        {
            type : "string",
            name : "raison",
            description : "La raison du bannissement",
            required : false
        }
    ],
    async run(bot,message,argv){
        try{
            let user = await bot.users.fetch(argv.get("membre").value)

            if(!user) return message.reply("Pas de membre a bannir") 
            let member = message.guild.members.cache.get(user.id)  

            let reason = argv.get("raison")?.value
            if(!reason) reason = "Pas de raison fournie."
            
            if(message.user.id == user.id) return message.reply("Imposible de se bannir soit meme ^^' ")
            if((await message.guild.fetchOwner()).id === user.id) return message.reply("Ne ban pas le propriétaire du serveur ! ")
            if(member && !member.bannable) return message.reply("Je ne peut pas bannir ce membre !")
            if(member && message.member.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peut pas bannir cette personne ! ")
            if((await message.guild.bans.fetch()).get(user.id)) return message.reply("ce membre est deja ban !")

            try{
                await user.send(`Tu a été bannis du serveur ${message.guild.name} par ${message.user.tag} pour la raison : ${reason}`)
            }catch(err){}

           await message.reply(`${message.user} a banni ${user.tag} pour la raison : \`${reason}\``) 
           await message.guild.bans.create(user.id,{reason : reason})
            
        }catch(err){
            return message.reply("Une erreur est survenue lors du bannissement."); 
        }
    }
}