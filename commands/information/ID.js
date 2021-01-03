const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: "id",
    category: "information",
    description: "shows Discord ID of someone",
    run: async (client, message, PREFIX) => {
        let args = message.content.substring(PREFIX.length).split(" ");
        let user = message.mentions.users.first();
        let author = message.author
        let member = message.mentions.members.first() || message.author
        const embed = new MessageEmbed()
            .setDescription(`This is the Discord ID from ${member}: ` + " " + "**" + user + "**")
            .setFooter("STT Premium | Information")
            .setColor("RANDOM")
        message.channel.send(embed);
    }
}