const { execute } = require("./kick");

module.exports = {
    name: "dm",
    async execute(client, message, args) {
        if(message.member.roles.cache.has('ADMINROLEID')) {
            return message.channel.send("u don't have enough perms to use this cmd!")
        };
        if(!args[0]) return message.channel.send("please provide a user!");
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send("no user found.");
        const reason = args.slice(1).join(" ");
        if(!reason) return message.channel.send("please provide a message!");
        try {
            await user.send(reason);
            return message.channel.send(`succesfully dmed to ${user.user.tag}!`);
        } catch {
            return message.channel.send("can't dm user!");
        }
    }
}