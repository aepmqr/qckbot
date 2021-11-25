module.exports = {
    name: 'partner',
    aliases: ['part'],
    description: "This command let mods add a new partner !",
    execute(client, message, args){

        if(message.member.roles.cache.has('ADMINROLEID')) return

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'partners.');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(mainRole.id);
            message.channel.send(`welcome new qcksoc™ partner ! <@${memberTarget.user.id}>`);
            message.react('8862089114768637952');
        } else{

            message.channel.send('Cant find that partner !');
        }
    }
}