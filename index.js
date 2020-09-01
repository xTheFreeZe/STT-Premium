const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const PREFIX = '^';

client.on('ready', () => {
    console.log('The bot is online! yaaaaaaaay')

});

client.on('message', msg => {
    if (msg.content === "#help") {
        const embed = new MessageEmbed()
            .setColor('#e2b007')
            .setTitle('This is the `^help` command of the Premium bot')
            .setDescription('These are your options:')
            .setThumbnail('https://cdn.discordapp.com/attachments/685794100112392212/750020815034122350/STT_BOT_PREMIUM_2.png')
            .addFields({
                name: ':joy:`^help fun` ',
                value: 'Some fun commands',
                inline: true
            }, {
                name: '⚔`^help staff`',
                value: 'Commands for Staff',
                inline: true
            }, )
            .addField('🛠`^help dev`', 'Developer options', true)
            .setFooter('This is the new STT Premium Bot. If you want to use it please DM:Marwin#8376');

        msg.channel.send(embed);
        msg.delete();
    }
})

client.on('message', msg => {
    if(msg.content === "^whypremium") {
        const embed = new MessageEmbed()
        .setColor('#EFEC26')
        .setThumbnail(msg.author.displayAvatarURL())
        .setDescription('You may ask yourself : **Why should I use the Premium Version?** Here are some perks you get:')
        .addField('Perks you get:', '`faster answers` `premium commands`')
        .setFooter('Premium Commands are : all the Voice Channel Commands')
    msg.reply(embed);
    msg.delete();
        
    }
})

bot.on('message', msg => {
    if(msg.content === "^online")
    const embed = new MessageEmbed()
    .setDescription
})


client.on('message', async message => {
    if (!message.guild) return;
    if (message.content === '^join') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const embed = new MessageEmbed()
                .setDescription('I joined your voice channel!')
                .setColor('#15DB1B')
            message.reply(embed);
            message.react('👍')

        } else {
            const embed = new MessageEmbed()
                .setDescription('Please enter a voice channel and try `$join` again!')
                .setColor('#E8EE17')
            message.reply(embed);
            message.react('👎')
        }
    }

});

client.on('message', async message => {
    if (!message.guild) return;
    if (message.content === '^leave') {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.leave();
            message.react('👍')
        } else {
            const embed = new MessageEmbed()
                .setDescription('Make sure I am in the same voice channel as you!')
                .setColor('#E8EE17')
            message.reply(embed);
            message.react('👎')
        }
    }

});

client.on('message', msg => {
    if (msg.content === "^play") {
        msg.reply('That doesnt work yet...');
    }
})

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'kick':



            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick(`I kicked ${user.tag}`).then(() => {
                        const embed = new MessageEmbed()
                            .setColor('#229954')
                            .setDescription(`:white_check_mark: STT Premium kicked ${user.tag}`)
                        message.reply(embed);
                        message.delete();







                    }).catch(err => {
                            const embed = new MessageEmbed()
                                .setColor('#F1C40F')
                                .setDescription('I was unable to kick this Person. Missing Permissions:`ADMINISTRATOR,KICK_MEMBERS` ')
                            message.reply(embed);
                            message.delete();

                            console.log(err);



                        }

                    )



                } else {
                    message.reply("That user isnt  on the Server")

                }
            } else {
                const embed = new MessageEmbed()
                    .setColor('#3F2DD2 ')
                    .setDescription('You need to specify a Person! You need to use SST!kick @[member]. Make sure I have the right Permissions to kick someone!')
                message.channel.send(embed);
                message.delete();


            }




            break;



    }

})






















client.login(process.env.token);