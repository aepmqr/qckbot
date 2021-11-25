const ms = require('ms');
module.exports = {
    name: 'removemember',
    aliases: ['rmem'],
    description: "This makes a member to a pub.",
    execute(client, message, args) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === ', members');
            let pubsRole = message.guild.roles.cache.find(role => role.name === ', public');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(pubsRole.id);
                message.channel.send(`<@${memberTarget.user.id}> member role has been removed !`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(pubsRole.id);
            message.channel.send(`<@${memberTarget.user.id}> member role has been removed for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(pubsRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}