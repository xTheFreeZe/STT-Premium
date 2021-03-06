const {
    MessageEmbed
} = require('discord.js');

const axios = require('axios');

module.exports = {
    name: "hug",
    category: "fun",
    description: "Hug a Person",

    run: async (client, message, PREFIX) => {
        let args = message.content.substring(PREFIX.length).split(" ");
        let author = message.author

        const user = message.mentions.users.first();

        const STTPremium = client.users.cache.get('749889822214324236')

        const argsembed = new MessageEmbed()
            .setDescription(`<:STT_no:778545452218974209> ${message.author.username} please mention someone you want to hug.`)
            .setColor("RANDOM")

        let pepega = '<:pepega:728525939293814785>';

        let pog = '<:pogchamp:713671100034187304>';


        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }


        if (!args[1]) return message.channel.send(argsembed);


        if (!user) return message.channel.send(argsembed);

        if (user == author) return message.channel.send(`I am sure you have someone else to hug ${pog}`);

        if (user == STTPremium) return message.channel.send(`Come on, don't hug the Bot ${pepega}`);

        const hugembed = new MessageEmbed()
            .setTitle(`${message.author.username} hugs ${user.username}`)
            .setImage(data.link)

        await message.channel.send(hugembed);

    }
}