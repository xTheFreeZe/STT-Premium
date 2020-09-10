const Discord = require('discord.js');
const {
    Client,
    MessageEmbed
} = require('discord.js');
const client = new Discord.Client();
const PREFIX = '^';
const activities_list = [
    "with friends",
    "Overwatch",
    "in a Tournament",
    "with JavaScript",
    "^help",
    "with premium",
    "games",
    "games with friends",
    "Overwatch ranked",
    "in the Syntax Terror Tournaments",
    "Overwatch with friends",
    "nothing",
    "Apex Legends"
];

client.on('ready', () => {
    console.log('The bot is online')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 30000);
});

client.on('message', msg => {
    if (msg.content === "^help") {
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
            })
            .addField('🛠`^help dev`', 'Developer options', true)
            .setFooter('This is the new STT Premium Bot. If you want to use it please DM:Marwin#8376');

        msg.channel.send(embed);
        msg.delete();
    }
})

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "suggest":
            const user = msg.mentions.users.first();
            const embed = new MessageEmbed()
                .setColor('0xFFC300')
                .setDescription('^suggest [suggestion] to start a poll')

            if (!args[1]) {
                msg.channel.send(embed);
            }

            let msgArgs = args.slice(2).join(" ");

            msg.channel.send("📋 " + `New Suggestion from ${user.tag}:` + "**" + msgArgs + "**").then(messagereaction => {
                messagereaction.react("👍");
                messagereaction.react("👎");
                msg.delete();
            })

            break;



    }
})

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "talk":
            const user = msg.mentions.users.first();

            let msgArgs = args.slice(1).join(" ");
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription("**" + msgArgs + "**")
        msg.channel.send(embed);
        msg.delete();

            break;



    }
})


client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "announce":
            const user = msg.mentions.users.first();
            const member = msg.guild.member(user);

            let msgArgs = args.slice(2).join(" ");

            msg.channel.send("New Developer update:" + "**" + msgArgs + ".**" + ` Developer: ${member}`).then(messagereaction => {
                msg.delete();
            })

            break;



    }
})

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "warn":
            const user = msg.mentions.users.first();
            const member = msg.guild.member(user);

            let msgArgs = args.slice(2).join(" ");
            const embed = new MessageEmbed()
            .setDescription(`:white_check_mark: STT Premium warned ${member} with the Reason:` + "**" + msgArgs + "**")
            .setColor('RANDOM')
        msg.channel.send(embed);
        msg.delete();
        console.log(`${user.tag} has been warned!`);

        break;



    }
})

client.on('message', msg => {
    if (msg.content === "^ping") {
        var ping = client.ws.ping;
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(":ping_pong: Ping of STT Premium is `" + `${ping}` + " ms`")
        msg.channel.send(embed);
        console.log('Ping command used!')
        msg.delete();
    }
})

client.on('message', msg => {
    if (msg.content === "^avatar") {
        const embed = new MessageEmbed()
            .setTitle('Here is your avatar!')
            .setColor('#E3F01B')
            .setImage(msg.author.displayAvatarURL())
            .setFooter('Powered by STT Productions')
        msg.channel.send(embed);
        msg.delete();

    }
})




client.on('message', msg => {
    if (msg.content === "^whypremium") {
        const embed = new MessageEmbed()
            .setColor('#EFEC26')
            .setThumbnail(msg.author.displayAvatarURL())
            .setDescription('You may ask yourself : **Why should I use the Premium Version?** Here are some perks you get:')
            .addField('Perks you get:', '`faster answers` `premium commands` `15+ custom bot status` `a Ban command`')
            .setFooter('Premium Commands: VC commands. The Suggestion command.')
        msg.reply(embed);
        msg.delete();

    }
})

client.on('message', msg => {
    if (msg.content === "^help suggest") {
        const embed = new MessageEmbed()
            .setColor('#F613A4')
            .setThumbnail('https://cdn.discordapp.com/attachments/685794100112392212/750020815034122350/STT_BOT_PREMIUM_2.png')
            .setDescription('Here is how to use the `^suggest` command:')
            .addField('Type ^suggest @{your tag } [suggestion ]  to start a poll.', 'Example: ^suggest @Marwin#8376 Is this cool?', true)
            .setFooter('Please note that it has to be your tag, otherwise it wont work!')
        msg.channel.send(embed);

    }
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
            message.react('👎');
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
                .setDescription('Make sure I am in the same voice channel as you.')
                .setColor('#E8EE17')
            message.reply(embed);
            message.react('👎')
        }
    }

});

client.on('message', msg => {
    if (msg.content === "^play") {
        msg.reply('That doesnt work yet! We are working hard to get this going 🔧');
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
                            .setDescription(`:white_check_mark: STT Premium kicked **${member}**`)
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
                    .setDescription('You need to specify a Person! You need to use ^kick @[member]. Make sure I have the right Permissions to kick someone!')
                message.channel.send(embed);
                message.delete();


            }




            break;



    }

})


client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ban':



            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.ban({
                        ression: 'You were banned!'
                    }).then(() => {
                        const embed = new MessageEmbed()
                            .setDescription(`:white_check_mark: STT Premium banned **${member}** `)
                            .setColor('#229954')
                        message.channel.send(embed);
                        console.log(`I banned ${user.tag}`)
                        message.delete();







                    }).catch(err => {
                            const embed = new MessageEmbed()
                                .setColor('#F1C40F')
                                .setDescription('I was unable to ban this Person. Missing Permissions:`ADMINISTRATOR,BAN_MEMBERS` ')
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
                    .setDescription('You need to specify a Person! You need to use ^ban @[member]. Make sure I have the right Permissions to ban someone!')
                message.channel.send(embed);
                message.delete();


            }




            break;



    }

})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');

    if (!channel) return;

    channel.send(`Welcome to the server, ${member}. Make sure you read the rules. We hope you enjoy your stay on our Server! `);
});



client.on("message", msg => {
    if (msg.content === "^twitter") {
        msg.channel.send('This is our twitter: https://twitter.com/SyntaxTerror_T');
    }
})

client.on('message', msg => {
    if (msg.content === "^website") {
        const embed = new MessageEmbed()
            .setTitle(':wrench: This our Battlefy Page :tools:')
            .setColor('#E42162')
            .setThumbnail('https://cdn.discordapp.com/attachments/685794100112392212/750020815034122350/STT_BOT_PREMIUM_2.png')
            .setDescription('Sign up here if you want to be part of our Overwatch Tournaments! https://battlefy.com/syntax-terror-tournaments')
        msg.channel.send(embed);

    }
})























client.login(process.env.token);