module.exports = {
    name: 'clear',
    description: "This command clears messages !",
    async execute(client, message, args) {
        if(!args[0]) return message.reply("please enter the amount of messages the you want to clear !");
        if(isNaN(args[0])) return message.reply("please enter a real number !");

        if(args[0] > 100) return message.reply("You can't delete more than a 100 messages !");
        if(args[0] < 1) return message.reply("You must delete atleast 1 message !");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });

    }
}