const Discord = require('discord.js');
const Math = require ('mathjs');

module.exports = {
    name: 'leads',
    aliases: ['ceo', 'ceos'],
    description: 'random leads',
    execute (client, message, args, Discord){
        messageArray = [ 
            "https://www.instagram.com/drmluvr/",
            "https://www.instagram.com/aepmqr/",


        ]
        const leads = (messageArray[Math.floor(Math.random()*messageArray.length)])
        message.channel.send(leads)
    }
}