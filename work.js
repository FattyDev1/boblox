const { Message } = require('discord.js')
const Client = require(`../structures/Client`)
module.exports = {
    name: `work`,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
run: async(client, message, args) => {
    const Jobs = [`Game Dev`, `Player`, `Scammer`, `Trader`]
    const job = Jobs[Math.floor(Math.random() * Jobs.length)]
    const Bobux = Math.floor(Math.random() * (300)) + 100
    message.reply(client.embed({ description: `You worked as a ${job} and earned **${Bobux}** bobux` }))
    return await client.economy.addBal(message.author.id, Bobux)
},
timeout: 900000
}