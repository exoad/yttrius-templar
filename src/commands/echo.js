//makes the bot say something
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
try{
    let rety = message.content.split(" ").slice(1);
    message.delete().catch(error => {
        if (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {
            message.channel.send("Error | Invalid Permissions Met")
        }
    });
    //a simple word filter
    if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.reply("Wtf are you trying to make me do");
    message.channel.send(rety.join(" ")).cleanContent;
    bot.channels.cache.get('806245388095979560').send(`${message.author.id}\n**Server:** ${message.guild.id}\nHas said: `+rety.join(" "))
}catch(err){
  message.channel.send("Something went wrong!\nError Code: ")
}
}

module.exports.help = {
  name:""
}
