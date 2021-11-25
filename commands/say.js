module.exports = {
    name: 'say',
    description: 'The say Command',
    async execute(client, message, args) {
      if(!message.member.hasPermission("MANAGE_MESSAGES") && 
      !message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command!");
      
      if (!args.join(' ')) {
        return message.channel.send(`Please give a text to say`);
      }
      
      message.channel.send(args.join(' '));
      
    }
  }