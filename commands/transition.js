const discord = require("discord.js")

module.exports = {
    name: 'transition',
    aliases: ['trans', 'trns'],

    async execute(client, message, args) {
        let replies =  [`heart pop up with burst overlay`, `x or y slide without mirror edges`, `rotation`, `x or y shake`, `zoom in or zoom out`, `split slide`, `rotation with butterfly overlay`, `masked flower with 3d stroke`, `3d cube with fold opening on top`, `x or y flip with film strip`, `null slide`, `mask person behind photo pop up`, `3d tunnel with blink`, `camera shutter`];

        let result = Math.floor((Math.random() * replies.length));

        const embed = new discord.MessageEmbed()
        .setTitle("__**TRANSITION**__")
        .setDescription(replies[result])
        .setColor("#2f3136")
        .setFooter("qcksoc™")
        .setTimestamp()

        return message.channel.send(embed)
    }
}