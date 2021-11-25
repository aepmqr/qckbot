module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args){

        if(message.member.roles.cache.has('ADMINROLEID')){

            const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
            
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    } else{
        message.channel.send('You dont have permission to do this!')
    }

        }

}