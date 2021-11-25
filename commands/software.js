const discord = require("discord.js")
const button = require("discord-buttons")
const { execute } = require("./howgay")

module.exports = {
    name: 'software',
    aliases: ['sftwre', 'sw'],

    async execute(client, message, args) {
        let button1 = new button.MessageButton()
        .setStyle('url')
		.setLabel('software!') 
		.setURL('https://mega.nz/folder/wFoS2IDY#H-YDmkwFiCRK25IIx4XjFA')
		.setDisabled(false); 

        const embed = new discord.MessageEmbed()
        .setTitle("__**SOFTWARE**__")
        .setDescription(`> ・click the button below to access the sofwares!`)
        .setColor("#2f3136")
        .setFooter("qcksoc™")
        .setTimestamp()

        return message.channel.send(embed, button1)
    }
}