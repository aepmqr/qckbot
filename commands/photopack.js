const discord = require("discord.js")
const button = require("discord-buttons")
const { execute } = require("./howgay")

module.exports = {
    name: 'photopack',
    aliases: ['phtopck', 'ppack'],

    async execute(client, message, args) {
        let button1 = new button.MessageButton()
        .setStyle('url')
		.setLabel('photo packs!') 
		.setURL('https://mega.nz/folder/qKwzyALC#GLpIMKATy_MTqm-rQOwuHw')
		.setDisabled(false); 

        const embed = new discord.MessageEmbed()
        .setTitle("__**PHOTO PACKS**__")
        .setDescription(`> ・click the button below to access the photopacks!`)
        .setColor("#2f3136")
        .setFooter("qcksoc™")
        .setTimestamp()

        return message.channel.send(embed, button1)
    }
}