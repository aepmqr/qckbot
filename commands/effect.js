const discord = require("discord.js")

module.exports = {
    name: 'effect',
    aliases: ['effct'],

    async execute(client, message, args) {
        let replies =  [`s_shake`, `s_glint`, `s_glow`, `BCC Mosiac`, `s_blurmocurves`, `s_GlowAura`, `s_edgerays`, `cc smear`, `wave warp`, `BCC lens blur`, `motion tile`, `3D strokes and saber`, `Particular`, `s_halftone`];

        let result = Math.floor((Math.random() * replies.length));

        const embed = new discord.MessageEmbed()
        .setTitle("__**EFFECT**__")
        .setDescription(replies[result])
        .setColor("#2f3136")
        .setFooter("qcksoc™")
        .setTimestamp()

        return message.channel.send(embed)
    }
}