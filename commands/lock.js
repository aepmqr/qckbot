module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(client, message, args) {
        if(message.member.roles.cache.has('ADMINROLEID'))
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: false })
        message.channel.send('succesfully locked this channel')
    }
}