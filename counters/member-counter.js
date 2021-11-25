module.exports = async (client) =>{
    const guild = client.guilds.cache.get('904952322076069949');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('911181936611975168');
        channel.setName(`・ ${memberCount.toLocaleString()}`);
        console.log('updating member count !');
    }, 5000);
}