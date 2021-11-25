const discord = require("discord.js")
const button = require("discord-buttons")
const { execute } = require("./howgay")

module.exports = {
    name: 'apply',
    aliases: ['apps', 'app'],

    async execute(client, message, args) {
        let button1 = new button.MessageButton()
        .setStyle('url')
		.setLabel('apply for member!') 
		.setURL('https://forms.gle/EXLqK3fvoXDUhf3V9')
		.setDisabled(false); 

        const embed = new discord.MessageEmbed()
        .setTitle("__**APPLICATION**__")
        .addField('> application language', ["﹒ accept : you're in the group.", "﹒ reapp : reapply with a new edit.", "﹒ decline : you need to improve."])
        .addField('> member apps rules', [`﹒ mbf [@aepmqr](https://www.instagram.com/aepmqr/) & [drmluvr](https://www.instagram.com/drmluvr/)`, "﹒ no edits over a month old.", "﹒ no remakes/heavily ib.", "﹒only apply once a day.", '﹒all "accepts" by app helpers must get a final accept by the lead.'])
        .setColor("#2f3136")
        .setFooter("hannahxxsoc™")
        .setTimestamp()

        message.author.send(embed, button1);
        message.react('895676992492544040');
    }
}