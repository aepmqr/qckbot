module.exports = {
    name: 'ping',
    description: "play ping pong with qcksoc bot !",
    execute(client, message, args){
        message.channel.send('pong!');
    }
}