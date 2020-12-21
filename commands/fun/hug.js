const {
    MessageEmbed
} = require('discord.js');
module.exports = {
    name: "hug",
    category: "fun",
    description: "Hug a Person",

    run: async (client, message, PREFIX) => {
        let args = message.content.substring(PREFIX.length).split(" ");
        let author = message.author
        const argsembed = new MessageEmbed()
            .setDescription(`<:STT_no:778545452218974209> ${message.author.username} please mention someone.`)
            .setColor("RANDOM")
        if (!args[1]) return message.channel.send(argsembed);
        const user = message.mentions.users.first();
        const member = message.guild.member(user);


        if (!args[1]) {
            message.channel.send('Use ^hug {@person you want to hug} ');
            message.delete();
        }

        let msgArgs = args.slice(1).join(" ");
        const embed = new MessageEmbed()
            .setDescription(`${author} hugs ${member}!`)
            .setImage('https://acegif.com/wp-content/gif/anime-hug-38.gif')
        message.channel.send(embed);
        message.delete();
    }
}