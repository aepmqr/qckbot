const discord = require("discord.js")

module.exports = {
    name: 'qcksocig',
    aliases: ['ig', 'grpig'],
    description: "the soc's official instagran account !",
    execute(client, message, args){
        const NewEmbed = new discord.MessageEmbed()
        .setTitle('__**OFFICIAL INSTAGRAM ACCOUNT**__')
        .setDescription(`[qcksoc™](https://www.instagram.com/qcksoc/)`)
        .setColor("#2f3136")
        .setFooter('qcksoc™')
        .setTimestamp()


        message.channel.send(NewEmbed)
    }
}