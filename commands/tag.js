const discord = require("discord.js")

module.exports = {
    name: 'tag',
    description: "the soc's official tag !",
    execute(client, message, args){
        const NewEmbed = new discord.MessageEmbed()
        .setTitle('__**MEMBER TAG**__')
        .setDescription(`[#qcksoc™](https://www.instagram.com/explore/tags/qcksoc%E2%84%A2/)`)
        .setColor("#2f3136")
        .setFooter('qcksoc™')
        .setTimestamp()


        message.channel.send(NewEmbed)
    }
}