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
    "Apex Legends",
    "in a three Squad",
    "Fall Guys",
    "Hearthstone"

];

client.on('ready', () => {
    console.log('The bot is online')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 40000);
});

//help command


client.on('message', msg => {
    if (msg.content === "^help") {
        const embed = new MessageEmbed()
            .setColor('#e2b007')
            .setTitle('This is the `^help` Command')
            .setDescription('These are your options:')
            .setThumbnail('https://cdn.discordapp.com/attachments/685794100112392212/750020815034122350/STT_BOT_PREMIUM_2.png')
            .addFields({
                name: ':joy:`^help fun` ',
                value: 'Some fun commands',
                inline: true
            }, {
                name: '⚔`^help mod`',
                value: 'Commands for Staff',
                inline: true
            })
            .addField('🛠`^help dev`', 'Developer options', true)
            .setFooter(`DM Marwin#8376 if you want to use the Premium Bot`);


        msg.channel.send(embed)

        msg.delete();
    }
})

client.on('message', msg => {
    if (msg.content === "^help2") {
        const embed = new MessageEmbed()
            .setColor('#e2b007')
            .setTitle('This is the `^help` Command')
            .setDescription('These are your options:')
            .setThumbnail('https://cdn.discordapp.com/attachments/685794100112392212/750020815034122350/STT_BOT_PREMIUM_2.png')

            .addField(':joy:`^help fun`', 'Fun commands')

            .addField('`🔨^help mod`', 'Commands for staff')

            .addField('🛠`^help dev`', 'Developer options')

            .setFooter(`DM Marwin#8376 if you want to use the Premium Bot`)


        msg.channel.send(embed);

        msg.delete();
    }
})

client.on('message', msg => {
    if (msg.content === "^help fun") {
        const embed = new MessageEmbed()
            .setColor('#E16210')
            .setTitle('**Fun Commands**')
            .setDescription('`^avatar`, `^hug`,  `^twitter`, `^website`, `^announcement`, `^sever`, `^suggest`, `^join`, `^play`, `^leave`, `^report`')
            .addField('Suggestion Command:', '^suggest {suggestion} <-- try ^help suggest for more info!', true)
        msg.channel.send(embed);
    }
})

client.on('message', msg => {
    if (msg.content === "^help mod") {
        const embed = new MessageEmbed()
            .setColor('#2E0E81')
            .setTitle('**⚔^help Moderator**')
            .setDescription('This is only ment for Staff Members!')
            .addField('kick/ban command:', '`^kick/^ban [@member]`', true)
            .addField('General Chat Commands:', '`^warn`,`^topic`, `^ID`, `^ping`', true)
            .setFooter('^help ban to get more info on how to ban people')
        msg.channel.send(embed);

    }
})

client.on('message', msg => {
    if (msg.content === "^help dev") {
        const embed = new MessageEmbed()
            .setColor('#56E448')
            .setTitle('🛠^help Developer')
            .setDescription('Everybody can use these commands, they are only here to give the Developer Info about certain things!')
            .addField('Basic commands:', '`^ping`, `^ID`, `^update`, `^talk`', true)
            .addField('Coding commands:', '`^info help`, `^info ping`, `^info join`, `^info kick`, `^info suggest`, `^info warn`', true)
            .setFooter('All info commands are pictures from the STT Bot, not from the STT Premium Bot!')
        msg.channel.send(embed);
    }
})

client.on('message', msg => {
    if (msg.content === "^delay 10") {
        const embed = new MessageEmbed()
            .setDescription(':white_check_mark: Successfully edited!')
            .setFooter('            }, 1000)')
        msg.reply('Message edit in 10 seconds')
            .then((msg) => {
                setTimeout(function () {
                    msg.edit(embed);
                }, 10000)
            });
    }
})

client.on('message', msg => {
    if (msg.content === "^delay 20") {
        const embed = new MessageEmbed()
            .setDescription(':white_check_mark: Successfully edited!')
            .setFooter('            }, 2000)')
        msg.reply('Message edit in 20 seconds')
            .then((msg) => {
                setTimeout(function () {
                    msg.edit(embed);
                }, 20000)
            });
    }
})

client.on('message', msg => {
    if (msg.content === "^info help") {
        msg.channel.send('https://cdn.discordapp.com/attachments/743816369706893454/743851801878462504/Help_command.PNG');
    }
})

client.on('message', msg => {
    if (msg.content === "^info ping") {
        msg.channel.send('https://cdn.discordapp.com/attachments/743816369706893454/743852094406000720/Ping_Command.PNG');
    }
})

client.on('message', msg => {
    if (msg.content === "^info join") {
        msg.channel.send('https://cdn.discordapp.com/attachments/743816369706893454/743852712621375548/Join_Command.PNG');
    }
})

client.on('message', msg => {
    if (msg.content === "^info kick") {
        msg.channel.send('https://cdn.discordapp.com/attachments/713356214536503402/743862200812437514/kick_command.PNG');
    }
})

client.on('message', msg => {
    if (msg.content === "^info suggest") {
        msg.channel.send('https://cdn.discordapp.com/attachments/681060754564448257/761915127082516500/unknown.png');
    }
})

client.on('message', msg => {
    if (msg.content === "^info warn") {
        msg.channel.send('https://cdn.discordapp.com/attachments/681060754564448257/761915361200177152/unknown.png');
    }
})


//suggest command: ^suggest {tag} (suggestion)

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    let author = msg.author

    switch (args[0]) {
        case "suggest":
            const user = msg.mentions.users.first();
            const embed = new MessageEmbed()
                .setColor('0xFFC300')
                .setDescription('^suggest [suggestion] to start a poll!')

            if (!args[1]) {
                msg.channel.send(embed);
            }

            let msgArgs = args.slice(1).join(" ");

            msg.channel.send("📋 " + `New Suggestion from ${author}:` + " " + "**" + msgArgs + "**").then(messagereaction => {
                messagereaction.react("👍");
                messagereaction.react("👎");
                messagereaction.react("😐");
                msg.delete();
            })

            break;



    }
})



//predict command (just the talk command with reactions)
client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "pred":
            const user = msg.mentions.users.first();
            const embed = new MessageEmbed()
                .setColor('0xFFC300')
                .setDescription('^pred {team vs team} and the bot will react with 👍 👎')


            if (!args[1]) {
                msg.channel.send(embed);
            }

            let msgArgs = args.slice(1).join(" ");

            msg.channel.send("**" + msgArgs + "**").then(messagereaction => {
                messagereaction.react("👍");
                messagereaction.react("👎");
                msg.delete();
            })

            break;



    }
})




//predict command (just the talk command with reactions)
client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    let author = msg.author

    switch (args[0]) {
        case "hug":
            const user = msg.mentions.users.first();
            const member = msg.guild.member(user);


            if (!args[1]) {
                msg.channel.send('Use ^hug {@person you want to hug} ');
                msg.delete();
            }

            let msgArgs = args.slice(1).join(" ");
            const embed = new MessageEmbed()
                .setDescription(`${author} hugs ${member}!`)
                .setImage('https://acegif.com/wp-content/gif/anime-hug-38.gif')
            msg.channel.send(embed);




            break;



    }
})

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "speak":
            const user = msg.mentions.users.first();
            const member = msg.guild.member(user);


            if (!args[1]) {
                msg.channel.send('Use ^speak {your message} and the bot will re-send your message in en embed ');
                msg.delete();
            }

            let msgArgs = args.slice(1).join(" ");
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription("**" + msgArgs + "**")
                .setTimestamp()
            msg.channel.send(embed);
            msg.delete();



            break;



    }
})






client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");


    switch (args[0]) {
        case "fix":
            const user = msg.mentions.users.first();

            let msgArgs = args.slice(1).join(" ");
            const embed = new MessageEmbed()
                .setColor('#7CFC00')
                .setTitle(':white_check_mark: Problem fixed!')
                .setDescription("**" + msgArgs + "**")
            msg.channel.send(embed);
            msg.delete();

            break;



    }
})

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");


    switch (args[0]) {
        case "devreport":
            const user = msg.mentions.users.first();

            let msgArgs = args.slice(1).join(" ");
            const embed = new MessageEmbed()
                .setColor('#7CFC00')
                .setTitle(':white_check_mark: The report you submitted has been read')
                .setDescription("**" + msgArgs + "**")
            msg.channel.send(embed);
            msg.delete();

            break;



    }
})


client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");


    switch (args[0]) {
        case "bug":
            const user = msg.mentions.users.first();

            let msgArgs = args.slice(1).join(" ");
            const embed = new MessageEmbed()
                .setColor('#FF0000')
                .setTitle(':small_red_triangle_down: Reported Problem')
                .setDescription("**" + msgArgs + "**")
            msg.channel.send(embed);
            msg.delete();

            break;



    }
})

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");


    switch (args[0]) {
        case "update":
            const user = msg.mentions.users.first();

            let msgArgs = args.slice(1).join(" ");
            const embed = new MessageEmbed()
                .setTitle('New Update!')
                .setColor('RANDOM')
                .setDescription("**" + msgArgs + "**")
            msg.channel.send(embed);
            msg.delete();

            break;



    }
})


//warn command: ^warn (@member) {reason}
client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    let author = msg.author

    switch (args[0]) {
        case "warn":
            const user = msg.mentions.users.first();
            const member = msg.guild.member(user);


            if (!args[1]) {
                msg.channel.send('Use ^warn {@person} (reason) and `STT Premium` will warn the Person you mentioned.  ');
                msg.delete();
            }

            let msgArgs = args.slice(2).join(" ");
            const embed = new MessageEmbed()
                .setDescription(`:white_check_mark: ${author} warned ${member} with the Reason:` + "**" + msgArgs + "**")
                .setColor('RANDOM')
                .setFooter(`${member} has been warned`)
            msg.channel.send(`Searching for ${member}... Please wait.`)
                .then((msg) => {
                    setTimeout(function () {
                        msg.edit(embed);
                    }, 3000)
                });
            msg.delete();
            console.log(`${member} has been warned! Provided Reason:` + " " + msgArgs);


            break;



    }
})

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    let author = msg.author

    switch (args[0]) {
        case "staffwarn":
            const user = msg.mentions.users.first();
            const member = msg.guild.member(user);


            if (!args[1]) {
                msg.channel.send('Use ^warn {@person} (reason) and `STT Premium` will warn the Person you mentioned.  ');
                msg.delete();
            }

            let msgArgs = args.slice(2).join(" ");
            const embed = new MessageEmbed()
                .setDescription(`:white_check_mark: ${member} has been warned! `)
                .addField(`Reason`, msgArgs, true)
                .addField(`Moderator`, `${author}`)
                .setColor('RANDOM')
                .setFooter(`${user.tag} has been warned`)
            msg.channel.send(`Preparing warning for _${user.tag}_ `)
                .then((msg) => {
                    setTimeout(function () {
                        msg.edit(embed);
                    }, 2000)
                });

            msg.delete();
            console.log(`${user.tag} has been warned! Mod ID : ${author}. (developer warning)     Provided Reason:` + " " + msgArgs);


            break;



    }
})

//warn command: ^warn (@member) {reason}


client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    let author = msg.author
    let channel = msg.channel

    switch (args[0]) {
        case "report":
            const user = msg.mentions.users.first();
            const member = msg.guild.member(user);


            if (!args[1]) {
                msg.channel.send('Use ^report {your message} and the bot will send your report to the Developer! ');
                msg.delete();
            }

            let msgArgs = args.slice(1).join(" ");
            const embed = new MessageEmbed()
                .setDescription(`:white_check_mark: Your Report has been sent to Marwin:` + " " + "**" + msgArgs + "**")
                .setColor('RANDOM')
                .setFooter(`Report from ${author} in ${channel}`)
            msg.channel.send("Sending your Message to the Developer, please wait a second!")
                .then((msg) => {
                    setTimeout(function () {
                        msg.edit(embed);
                    }, 3000)
                });
            msg.delete();
            console.log(`New Report from ${author}:` + msgArgs);


            break;



    }
})



client.on("message", msg => {
    if (msg.content === "^outage") {
        const embed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Bot Outage!')
            .setDescription('STT Bot is offline! Please be patient as the Developer is trying to fix it!')
            .setFooter('Please take note that this may take some time.')
        msg.channel.send(embed);
        msg.delete();

    }
})

client.on('message', msg => {
    if (msg.content === "^outage commands") {
        const embed = new MessageEmbed()
            .setColor('#ffd700')
            .setAuthor('Temporary outage')
            .setDescription(':yellow_circle: Commands dont seem to work!')
            .setFooter('Please be patient as I am working on it')
        msg.channel.send(embed);
        msg.delete()
    }
})

client.on('message', msg => {
    if (msg.content === "^outage ping") {
        const embed = new MessageEmbed()
            .setColor('#ffd700')
            .setAuthor('Temporary outage')
            .setDescription(':yellow_circle: The bot is having latency problems!')
            .setFooter('Please be patient as I am working on it')
        msg.channel.send(embed);
        msg.delete()
    }
})


client.on("message", msg => {
    if (msg.content === "^outage gone") {
        const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(':white_check_mark: All Systems operational')
            .setDescription('All errors have been resolved and the STT Bot is online again!')
            .setFooter('Thank you for your patience.')
        msg.channel.send(embed);
        msg.delete();
    }
})



client.on('message', msg => {
    if (msg.content === "^ping") {
        var ping = client.ws.ping;
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(":ping_pong: Ping of STT Premium is `" + `${ping}` + " ms`")
        msg.channel.send('Checking for ping... Hold on')
            .then((msg) => {
                setTimeout(function () {
                    msg.edit(embed);
                }, 4000)
            });
        msg.delete();
    }
})

client.on("message", msg => {
    if (msg.content === "^online") {
        var ping = client.ws.ping;
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(':white_check_mark: Syntax Terror Premium bot is online!')
            .setFooter("Ping of STT Premium is " + `${ping}` + " ms")
        msg.channel.send(embed);
        console.log('Checked if I am online!');
    }
})

client.on('message', msg => {
    if (msg.content === "^avatar") {
        const embed = new MessageEmbed()
            .setTitle('Here is your avatar:')
            .setColor('RANDOM')
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
            .addField('Perks you get:', '`faster answers` `premium commands` `a Ban command` `')
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
            .addField('Type ^suggest [suggestion ]  to start a poll.', 'Example: ^suggest Is this cool?', true)
        msg.channel.send(embed);

    }
})

client.on('message', msg => {
    if (msg.content === "^help ban") {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/685794100112392212/750020815034122350/STT_BOT_PREMIUM_2.png')
            .setDescription('Here is how to use the `^ban` command:')
            .addField('Type `^ban @[member] {reason}`', 'Example: `^ban @Marwin#8376 Dont use this word!`', true)
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
            console.log(`I joined a Voice Channel`);
            message.react('👍')

        } else {
            const embed = new MessageEmbed()
                .setDescription('Please enter a voice channel and try `^join` again!')
                .addField('Comment is buggy?', 'Please DM `@Marwin#8376`.', true)
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
            const embed = new MessageEmbed()
                .setDescription('I left your voice Channel!')
                .setColor('#15DB1B')
            message.channel.send(embed);
            console.log(`I left a Voice Channel`);
            message.react('👍')
        } else {
            const embed = new MessageEmbed()
                .setDescription('I could not leave this Voice Channel')
                .setColor('#E8EE17')
                .setFooter('Is the bot in a voice channel with you? If yes and it still doesnt leave please use the ^report feature!')
            message.reply(embed);
            message.react('👎')
        }
    }

});

client.on('message', msg => {
    if (msg.content.includes("^play")) {
        let user = msg.mentions.users.first();
        msg.channel.send("This doesn't work yet but we are working on it 🔨 🔧");




    }

})


client.on('message', msg => {
    if (msg.content === "^newtourny") {
        msg.channel.send(`It's Tournament time! https://battlefy.com/syntax-terror-tournaments/halloween-horror-bronze-to-plat-by-stt/5f6b4e0d1104cd7a261306e6/info?infoTab=details`);
    }

})

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    let msgArgs = args.slice(2).join(" ");
    let author = msg.author
    let channel = msg.channel

    switch (args[0]) {
        case 'kick':



            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick(msgArgs).then(() => {
                        const embed = new MessageEmbed()
                            .setColor('#229954')
                            .setDescription(`:white_check_mark: STT Premium kicked ${member} Reason:` + " " + "**" + msgArgs + "**")
                            .setTimestamp()
                        message.reply(embed);
                        console.log(`I kicked ${user.tag}. Provided Reason:` + msgArgs);
                        msg.author.send(`Hey, this is STT Premium Logs. You just kicked ${user.username} in the channel ${channel}  ${setTimestamp}`)
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
    let msgArgs = args.slice(2).join(" ");
    let author = message.author

    switch (args[0]) {
        case 'ban':



            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.ban({
                        ression: msgArgs
                    }).then(() => {
                        const embed = new MessageEmbed()
                            .setDescription(`:white_check_mark: STT Premium banned  ${member} Reason:**` + " " + msgArgs + "**")
                            .setColor('#229954')
                            .setTimestamp()
                            .setFooter(`Mod ID: ${author}`)
                        message.channel.send(embed);
                        console.log(`I banned ${user.tag}. Provided Reason:` + msgArgs);
                        message.delete();







                    }).catch(err => {
                            const embed = new MessageEmbed()
                                .setColor('#F1C40F')
                                .setDescription('I was unable to ban this Person. Missing Permissions:`ADMINISTRATOR,BAN_MEMBERS` ')
                            message.reply(embed);
                            message.delete();
                            console.log(`${author} tried to ban ${member}`);

                            console.log(err);



                        }

                    )










                } else {
                    message.reply("That user isnt  on the Server")

                }
            } else {
                const embed = new MessageEmbed()
                    .setColor('#3F2DD2 ')
                    .setDescription('You need to specify a Person! You need to use ^ban @[member] {reason}. Make sure I have the right Permissions to ban someone!')
                message.channel.send(embed);
                message.delete();
                console.log(`${author} used the "^ban"`);


            }




            break;



    }

})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');

    if (!channel) return;

    channel.send(`Welcome to the server, ${member}. Make sure you read the rules. We hope you enjoy your stay on our Server! `);
});


client.on('message', msg => {
    if (msg.content === "^marwin is live") {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Marwin just went live on Twitch!')
            .setImage('https://acegif.com/wp-content/gif/outerspace-43.gif')
            .setFooter('Make sure you leave a follow!')
        msg.channel.send(embed);
        msg.delete();

    }
})

client.on('message', msg => {
    if (msg.content === "^lite is live") {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('LiteisCool just went live on Twitch! https://www.twitch.tv/liteiscool')
            .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/568fb90d-0c93-4f70-82dd-7c5c3294a313-profile_image-70x70.png')
            .setImage('https://acegif.com/wp-content/gif/outerspace-66.gif')
            .setFooter('Make sure you leave a follow and stay there for a bit!')
        msg.channel.send(embed);
        msg.delete();

    }
})

client.on('message', msg => {
    if (msg.content === "^james is live") {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('NotGhol just went live on Twitch! https://www.twitch.tv/notghol')
            .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/66592030-e25a-4f35-a250-d3d5a6f7127e-profile_image-70x70.png')
            .setImage('https://cdn.discordapp.com/attachments/676043311659614228/735611183205318656/unknown.png')
            .setFooter('Make sure you leave a follow and share some love ♥')
        msg.channel.send(embed);
        msg.delete();

    }
})

client.on('message', msg => {
    if (msg.content === "^sledgy is live") {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('sledgy420 just went live on Twitch! https://www.twitch.tv/sledgy420')
            .setThumbnail('https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-70x70.png')
            .setImage('https://acegif.com/wp-content/gifs/happy-cat-27.gif')
            .setFooter('Make sure you leave a follow and watch him play epic games!')
        msg.channel.send(embed);
        msg.delete();

    }
})



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

client.on('message', msg => {
    if (msg.content === "^twitter2") {
        const embed = new MessageEmbed()
            .setTitle('Our twitter Team')
            .setColor('#E42162')
            .setThumbnail('https://cdn.discordapp.com/attachments/685794100112392212/750020815034122350/STT_BOT_PREMIUM_2.png')
            .setDescription('Twitter Accounts of Teams we partner with:')
            .addField('Willy Wonky Wankers', 'https://twitter.com/WWonkyW', true)
        msg.channel.send(embed);

    }
})

client.on('message', msg => {
    if (msg.content === "^announcement") {
        const embed = new MessageEmbed()
            .setTitle(':satellite: New Announcement :satellite: ')
            .setColor('#CE3CDF')
            .setDescription('The `^ping` command is a bit buggy, I am working on it!')
        msg.channel.send(embed);
        msg.delete();

    }
})

client.on('message', msg => {
    if (msg.content === "^server") {
        const embed = new MessageEmbed()
            .setTitle(':boom: Click on me to get on our Server! :boom:')
            .setColor('#E81B63')
            .setURL('https://discord.gg/K6WVPb8')

        msg.channel.send(embed);

    }
})

client.on('message', msg => {
        if (msg.content === "^topic") {
            const embed = new MessageEmbed()
                .setTitle('Watch out!')
                .setColor('#EC0808')
                .setDescription('Please change the topic or make sure your conversation is relevant to the current channel!')
            msg.channel.send(embed);
            msg.delete();


        }
    }



)

client.on('message', msg => {
    if (msg.content === "^support") {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Please support me ( test ) ')

        msg.channel.send(embed);

    }
})


client.on('message', msg => {
    if (msg.content.includes("^ID")) {
        let user = msg.mentions.users.first();
        msg.channel.send(`This is the Discord ID form ${user.tag}: ` + user);





    }

})

client.on('message', msg => {
    if (msg.content.includes("^talk")) {
        let user = msg.mentions.users.first();
        msg.channel.send("This command doesnt exist anymore. It has been changed!");
        msg.delete();




    }

})



client.on('message', msg => {
    if (msg.content.includes("hello")) {
        let user = msg.mentions.users.first();
        msg.react('👋')


    }

})


client.on('message', msg => {
    if (msg.content.includes("Hello")) {
        let user = msg.mentions.users.first();
        msg.react('👋')


    }

})


client.on('message', msg => {
    if (msg.content === "STT Premium") {
        msg.channel.send('This is cool')
            .then((msg) => {
                setTimeout(function () {
                    msg.edit('This is actually awesome!');
                }, 3000)
            });
    }
})

client.on('message', (message) => {
    if (message.content === "^staff") {
        let user = message.mentions.users.first();
        message.channel.send(`<@&770312766534975509> A Member needs your help!`);
    }
});
























client.login(process.env.token);