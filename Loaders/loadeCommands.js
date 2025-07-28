const fs = require("fs");

module.exports = async bot => {
    const commandFiles = fs.readdirSync("./Commands").filter(f => f.endsWith(".js"));

    for (const file of commandFiles) {
        const command = require(`../Commands/${file}`);
        
        if (!command.name || typeof command.name !== "string") {
            throw new TypeError(`La commande ${file.slice(0, file.length-3)} n'a pas de nom`);
        }

        bot.commands.set(command.name, command);
        console.log(`La commande ${file.slice(0, file.length-3)} est chargée avec succès`);
    }
};
