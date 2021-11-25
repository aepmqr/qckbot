module.exports = {
    name: 'welcome',
    aliases: ['wlc', 'hello', 'hi', 'hey'],
    description: "This command let mods add a new member !",
    execute(client, message, args){

        if(message.member.roles.cache.has('ADMINROLEID')) return

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === ', members');
            let pubsRole = message.guild.roles.cache.find(role => role.name === ', public');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(pubsRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> welcome to hannahxxsoc !`);
            message.react('895840664439382087');
        } else{

            message.channel.send('Cant find that pubs !');
        }
    }
}