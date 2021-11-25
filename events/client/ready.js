const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = () => {
    client.once('ready', () => {
        console.log('qckbot is ready');
        client.user.setActivity('q+help', { type: "PLAYING" }).catch(console.error)
    })
}