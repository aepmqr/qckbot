const discord = require("discord.js");
const Math = require ('mathjs');

module.exports = {
    name: 'ppsize',
    aliases: ['pp'],
    description: 'pp size',
    execute (client, message, args, Discord){
        let user = message.mentions.users.first() || message.author;
        let random = Math.floor(Math.random() * 10) + 1; // Get a random number
        let size = "";
     
        for(let i = 0; i < random; i++){
           size += "=";
        }
        
        let pp = "8" + size + "D";
        let description = user.tag + " ppsize: " + pp;
     
        // Create an embed message
        const embed = new discord.MessageEmbed()
        .setAuthor(user.tag, user.displayAvatarURL())
        .setColor("#2f3136")
        .setDescription(description)
        .setTimestamp()
        .setFooter("qcksoc™")
        return message.reply(embed);
     }
    }