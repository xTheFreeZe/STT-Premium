const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: "purge",
    category: "moderation",
    run: async (client, message, args) => {
        const log_channel = message.guild.channels.cache.find(r => r.name === 'logs');

        let permsembed = new MessageEmbed()
            .setDescription(`<:STT_no:778545452218974209> You can't use that ${message.author.username}!`)
            .addField("Error", 'Missing `MANAGE_MESSAGES`')
            .setColor("RANDOM")

        const nologembed = new MessageEmbed()
            .setDescription("<:STT_no:778545452218974209> Please create a channel called `logs` before using this command!")
            .setColor("RANDOM")

        const zeroembed = new MessageEmbed()
            .setDescription('<:STT_no:778545452218974209> int value should be greater than or equal to 1')
            .setColor('RED')

        const highembed = new MessageEmbed()
            .setDescription('<:STT_no:778545452218974209> Your provided value was too high to delete. You deleted `100` Messages')
            .setColor('RED')

        const nonnumberembed = new MessageEmbed()
            .setDescription('<:STT_no:778545452218974209> int value should be a number')
            .setColor('RED')

        if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
            return message.channel.send(
                permsembed // returns this message to user with no perms
            );

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bot has no Permissions!");


        if (!log_channel) return message.channel.send(nologembed);

        if (!args[0]) {
            const purgeembed = new MessageEmbed()
                .setDescription("<:STT_no:778545452218974209> Please enter an amount of Messages you want to purge!")
                .setColor("RANDOM")
            return message.channel.send(purgeembed)
        }

        let deleteAmount;

        let start = 0;

        if (parseInt(args[0]) > 100) {
            message.channel.send(highembed);
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        let checknumber = parseInt(args[0]);

        if (isNaN(checknumber)) return message.channel.send(nonnumberembed);

        if (deleteAmount == 0) return message.channel.send(zeroembed);

        if (deleteAmount)

            await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setDescription(`<:STT_yes:778545433810173952> Successfully deleted ${deleteAmount} Messages`)
            .setColor('#f2f2f2')


        if (deleteAmount == 1) embed.setDescription('<:STT_yes:778545433810173952> Successfully deleted 1 Message!');


        await message.channel.send(embed)

        const logembed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`PURGE`)
            .addField('Moderator', `${message.author.tag}`)
            .addField('Channel', `${message.channel}`)
            .addField('Amount', `${deleteAmount}`)
            .setTimestamp()

        log_channel.send(logembed);
    }
}