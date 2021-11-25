const Discord = require('discord.js');
const Math = require ('mathjs');

module.exports = {
    name: 'edits',
    aliases: ['membersedits'],
    description: 'members edits',
    execute (client, message, args, Discord){
        messageArray = [ 
            "https://streamable.com/h06x2k",
            "https://streamable.com/3513t",
            "https://streamable.com/f2lfa4",
            "https://streamable.com/ymun7y",
            "https://streamable.com/a7qu57",
            "https://streamable.com/4icrd3",
            "https://streamable.com/nd66ap",
            "https://streamable.com/mxf337",
            "https://streamable.com/c9hgfv",
            "https://streamable.com/e6i2bf",
            "https://streamable.com/wks6zp",
            "https://streamable.com/8xdti9",
            "https://streamable.com/lvaukd",
            "https://streamable.com/w74dum",
            "https://streamable.com/gubv40",
            "https://streamable.com/bdijkz",
            "https://streamable.com/ise6ke",
            "https://streamable.com/cfblu6",
            "https://streamable.com/mxfnmx",
            "https://streamable.com/vp47b4",



        ]
        const edits = (messageArray[Math.floor(Math.random()*messageArray.length)])
        message.channel.send(edits)
    }
}