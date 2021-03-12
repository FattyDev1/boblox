const { Message } = require("discord.js");
const Client = require(`../structures/Client`);
const got = require('got')
const Discord = require('discord.js')
module.exports = {
  name: `meme`,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/cleanmemes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let awards = content[0].data.children[0].data.total_awards_received;

        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('RANDOM')
        embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments} 🏆${awards}`)
        message.channel.send(embed);
    })
    },
    timeout: 2500

  
};
