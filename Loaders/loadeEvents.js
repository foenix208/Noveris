const fs = require("fs");

module.exports = async bot => {
    const commandFiles = fs.readdirSync("./Events").filter(f => f.endsWith(".js"));
    for (const file of commandFiles) {

        let event = require(`../Events/${file}`);
        bot.on(file.split(".js").join(""),event.bind(null, bot))

        console.log(`Evenement ${file} est chargéé avec succès`)
    }
};
