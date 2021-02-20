const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
       if (talkedRecently.has(message.author.id)) {
            message.reply("Woah! Relax! This command is on cooldown for 1 minute! ");
    } else {

        message.channel.send(":ping_pong: Pinging...").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            var clientPing = Math.round(bot.pi);
  
            m.edit(`>>> **<:connection_orange:792583821748731934> Pong!** \n Bot Ping: ${ping}ms`);
        });

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
}

module.exports.help = {
  name:"ping"
}
