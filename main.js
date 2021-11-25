const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const fs = require('fs');
const disbut = require("discord-buttons");
disbut(client);
const memberCounter = require('./counters/member-counter')

    client.commands = new Discord.Collection();
    client.events = new Discord.Collection();

    ['command_handler', 'event_handler'].forEach(handler =>{
        require(`./handlers/${handler}`)(client, Discord);
    });

    client.once('ready', () => {
    console.log('qckbot is ready');

    const arrayOfStatus = [
        `q+ is my prefix`,
        `q+help`,
        `multifandom!`,
        `currently recruiting!`,
        `tobby loves cock and is amazing`,
        `adrian and martha are the best leads`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status)
        client.user.setActivity(status, {
        type:"STREAMING",
        url: "https://www.twitch.tv/quackity"
    })
    index++
}, 5000);
    
})
        
client.login(process.env.DISCORD_TOKEN);
