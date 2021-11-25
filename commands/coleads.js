const Discord = require('discord.js');
const Math = require ('mathjs');

module.exports = {
    name: 'coleads',
    aliases: ['col', 'cos'],
    description: 'random coleads',
    execute (client, message, args, Discord){
        messageArray = [ 
            "https://www.instagram.com/honksifys/",
            "https://www.instagram.com/srslyinnitt/",
            "https://www.instagram.com/xtxbbo/",
            "https://www.instagram.com/endcrr/",


        ]
        const coleads = (messageArray[Math.floor(Math.random()*messageArray.length)])
        message.channel.send(coleads)
    }
}