const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { execute } = require('./ppsize');


module.exports = {
  name: "help",
   aliases: ["hlp"],
   async execute(client, message, args ) {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle("__**QCK HELP COMMANDS**__")
        .setColor("#2f3136")
        .addField('about:', "> ﹒my prefix is `q+`. There are currently 4 categories that this help command provides. We are currently planning to add more commands, so stay tuned for that!")
        .addField('info:', `> ﹒This bot is coded using Discord.js v12, <@840098722515386379> coded this bot. If u have any questions, please dm **martha#1000**`)
        .setFooter("qcksoc™ (ib KYL Bot)")
        .setTimestamp();

        const embed1 = new Discord.MessageEmbed()
        .setTitle("__**MODERATION COMMANDS**__")
        .setColor("#2f3136")
        .addField("kick", ["> ﹒kicks a member", "> ﹒aliases: kick", "> ﹒usage: `q+kick (mention)`"])
        .addField("ban", ["> ﹒bans a member", "> ﹒aliases: ban", "> ﹒usage: `q+ban (mention)`"])
        .addField("clear", ["> ﹒deletes bulk amount of text.", "> ﹒aliases: clear", "> ﹒usage: `q+clear (amount)`"])
        .addField("welcome", ["> ﹒welcome/adds a new member", "> ﹒aliases: welcome", "> ﹒usage: `q+welcome (mention)`"])
        .addField("removemember", ["> ﹒remove a member", "> ﹒aliases: removemember", "> ﹒usage: `q+removemember (mention)`"])
        .addField("mute", ["> ﹒mutes a member", "> ﹒aliases: mute", "> ﹒usage: `q+mute (mention)`"])
        .addField("unmute", ["> ﹒unmutes a member", "> ﹒aliases: unmute", "> ﹒usage: `q+unmute (mention)`"])
        .setFooter("qcksoc™")
        .setTimestamp();

        const embed2 = new Discord.MessageEmbed()
        .setTitle("__**FUN COMMANDS**__")
        .setColor("#2f3136")
        .addField("8ball", ["> ﹒sends an 8bal decision", "> ﹒aliases: 8b", "> ﹒usage: `q+8ball (question)`"])
        .addField("howgay", ["> ﹒sends them percentage of your gayness.", "> ﹒aliases: hg", "> ﹒usage: `q+howgay (mention)`"])
        .addField("ship", ["> ﹒sends them a ship name", "> ﹒aliases: ship", "> ﹒usage: `q+ship (mention1) (mention2)`"])
        .addField("ppsize", ["> ﹒send ur pp size", "> ﹒aliases: ppsize", "> ﹒usage: `q+ppsize (mention)`"])
        .addField("canceladrian", ["> ﹒cancel adrian!!", "> ﹒aliases: canceladrian", "> ﹒usage: `q+canceladrian`"])
        .setFooter("qcksoc™")
        .setTimestamp();

        const embed3 = new Discord.MessageEmbed()
        .setTitle("__**GROUP INFO COMMANDS**__")
        .setColor("#2f3136")
        .addField("apply", ["> ﹒dms you the rules and the link for apps.", "> ﹒aliases: apply", "> ﹒usage: `q+apply`"])
        .addField("leads", ["> ﹒sends u the link for the lead's instagram accounts.", "> ﹒aliases: leads", "> ﹒usage: `q+leads`"])
        .addField("coleads", ["> ﹒sends u the link for the co lead's instagram accounts.", "> ﹒aliases: coleads", "> ﹒usage: `q+coleads`"])
        .addField("edits", ["> ﹒sends a random member edit.", "> ﹒aliases: edits", "> ﹒usage: `q+edits`"])
        .addField("qcksocig", ["> ﹒sends u the link for our official instagram account", "> ﹒aliases: qcksocig", "> ﹒usage: `q+qcksocig`"])
        .addField("tag", ["> ﹒sends you the official member tag", "> ﹒aliases: tag", "> ﹒usage: `q+tag`"])
        .setFooter("qcksoc™")
        .setTimestamp();

        const embed4 = new Discord.MessageEmbed()
        .setTitle("__**EDITOR COMMANDS**__")
        .setColor("#2f3136")
        .addField("transition", ["> ﹒sends u a transition", "> ﹒aliases: trans", "> ﹒usage: `q+transition`"])
        .addField("photo pack", ["> ﹒sends u a mega link full of photos", "> ﹒aliases: phtopck", "> ﹒usage: `q+photopack`"])
        .addField("software", ["> ﹒sends u a mega link full of after effetcs plugins", "> ﹒aliases: sw , sftwre", "> ﹒usage: `q+software`"])
        .addField("effect", ["> ﹒sends a random effects", "> ﹒aliases: effects", "> ﹒usage: `q+effect`"])
        .setFooter("qcksoc™")
        .setTimestamp();

        const embed5 = new Discord.MessageEmbed()
        .setTitle("__**UTILITY COMMANDS**__")
        .setColor("#2f3136")
        .addField("help", ["> ﹒sends help commands by categories", "> ﹒aliases: help", "> ﹒usage: `q+help`"])
        .addField("say", ["> ﹒say something and the qck bot repeats it after!", "> ﹒aliases: say", "> ﹒usage: `q+say (anything u want to say)`", "﹒note: boosters and moderators can use this cmd!"])
        .setFooter("qcksoc™")
        .setTimestamp();


        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Moderation')
        .setEmoji('🔒')
        .setValue('option1')

        let option2 = new MessageMenuOption()
        .setLabel('Fun')
        .setEmoji('🕹')
        .setValue('option2')

        let option3 = new MessageMenuOption()
        .setLabel('Group info')
        .setEmoji('💗')
        .setValue('option3')
        
        let option4 = new MessageMenuOption()
        .setLabel('Editor')
        .setEmoji('💻')
        .setValue('option4')

        let option5 = new MessageMenuOption()
        .setLabel('Utility')
        .setEmoji('🛠')
        .setValue('option5')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('kindly select a category!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 10000000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("This help menu is expired! Please retype the command to view again.")
    })



       //---------------------------------------E N D----------------------------------------
       
       //-------------\ Join our official discord server for any help: https://discord.gg/EZDfrer
    }
  };