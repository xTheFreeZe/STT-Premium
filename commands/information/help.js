const {
    MessageEmbed
} = require('discord.js');
const {
    category
} = require('../moderation/report');

module.exports = {
    name: "help",
    category: "information",
    description: "General Info command",
    run: async (client, message, args, PREFIX) => {


        let author = message.author
        let channel = message.channel
        var ping = client.ws.ping;
        const log_channel = message.guild.channels.cache.find(r => r.name === 'logs');

        const errorembed = new MessageEmbed()
            .setTitle('ERROR')
            .setColor('RED')
            .setDescription('<:STT_no:778545452218974209> Oh, you messed up... Unknown Command!')
            .setFooter('Type ^help to see all available help commands')


        const funembed = new MessageEmbed()
            .setColor('#E16210')
            .setTitle('Fun Commands')
            .setDescription('`^avatar`, `^covid`, `^lottery`, `^meme`, `^8ball`, `^kill`, `^hug`, `^suggest`, `^join`, `^play`, `^leave`')
            .setFooter("Takara | Information")

        const modembed = new MessageEmbed()
            .setColor('#2E0E81')
            .setTitle('Staff Commands')
            .setDescription('This is only meant for Staff Members!')
            .addField('kick/ban command:', '`^kick/^ban [@member]`', true)
            .addField('General Chat Commands:', '`^lock on/off`, `^purge`, `^unban`, `^warn`, `^topic`', true)
            .setFooter("Takara | Information")

        const devembed = new MessageEmbed()
            .setColor('#56E448')
            .setTitle('Developer Commands')
            .setDescription('Everybody can use these commands, they are only here to give the Developer Info about certain things!')
            .addField('Basic commands:', '`^restart`, `^exit`, `^timer`', true)
            .setFooter("Takara| Information")


        const utilitieembed = new MessageEmbed()
            .setTitle("Utilities")
            .setDescription('`^info`, `^severinfo`, `^uptime`, `^id`, `^report`, `^permissions`, `^system`')
            .setColor("#FCFEFE")
            .setFooter("Takara | Information")


        const embed = new MessageEmbed()
            .setColor('#e2b007')
            .setTitle('This is the `^help` Command')
            .setDescription('These are your options:')
            .setThumbnail('https://cdn.discordapp.com/attachments/681060754564448257/841419896797528064/unknown.png')

            .addField('`^help fun`', 'Fun commands')

            .addField('`^help mod`', 'Commands for staff')

            .addField('`^help dev`', 'Developer options')

            .addField('`^help util`', 'Utilitie Commands')

            .addField("`My Ping`", `${ping}`)

            .addField("`My Website`", "[Click here](https://gifted-williams-0e90d5.netlify.app/)", true)

            .addField("`My Status`", "[Click here](https://sttproductions.statuspage.io/)", true)

            .addField("`Report a Bug`", "[Click here](https://github.com/xTheFreeZe/STT-Premium/issues)", true)

            .setFooter("Many Features were made possible by Epicrafter#3685. Thank you!")

        const nologchannel = new MessageEmbed()
            .setTitle('No Log channel!')
            .setDescription('<:STT_no:778545452218974209> Create a channel called `logs` so you can use all mod commands!')
            .setColor('#FF0000')

        const yeslogchannel = new MessageEmbed()
            .setDescription('<:STT_yes:778545433810173952> You have a log channel!')
            .setFooter('All Mod commands can be used!')
            .setColor('#00FF00')

        if (!args[0]) {

            if (ping > 150) message.channel.send('High Ping detected! This could lead to slow messages. If the ping isnt at 90 - 110 in an Hour, please check out the Statuspage of the Bot to see if everything is normal!')
            return message.channel.send(embed)

        } else if (args[0] == 'fun') {

            return message.channel.send(funembed)

        } else if (args[0] == 'mod') {

            if (!log_channel) message.channel.send(nologchannel)
            if (log_channel) message.channel.send(yeslogchannel)
            return message.channel.send(modembed)

        } else if (args[0] == 'dev') {

            return message.channel.send(devembed)

        } else if (args[0] == 'util') {

            return message.channel.send(utilitieembed)

        } else if (args[0] == 'ban err') {

            return console.log(`The help message for ^ban has been sent to ${message.author.username}.`);

        } else {

            return message.channel.send(errorembed);

        }


    }
}