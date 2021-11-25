const Discord = require('discord.js')

module.exports = {
    name: 'howgay',
    aliases: ['hg'],
    description: "a howgay command",

    async execute(client, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const NewEmbed = new Discord.MessageEmbed()
        .setTitle("Gay Calculator")
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("#2f3136")
        .setTimestamp()
        .setFooter("qcksoc™")

        message.reply(NewEmbed);
    }
}