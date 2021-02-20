//this command utilizies the nekos.life rest api for the gif

const { Discord, MessageEmbed } = require("discord.js");
const fetch = require('fetch');
module.exports.help = {
  name:"hug"
}
module.exports.run = async (bot, message, args) => {
try{
      if (message.content.includes('@everyone') || message.content.includes('@here')) 
      {
        message.channel.send("Uh no.").then(r =>{
          r.delete({ timeout: 5000 })
        })
      }
      else if (!rety || rety == undefined) return message.channel.send('Hmm I didn\'t find that user. Try again.').then(r => { r.delete({ timeout: 5000 }) })
      const { url } = await fetch('https://nekos.life/api/hug').then(m => m.json())
      
      const embed = new MessageEmbed()
        .setDescription(`**${message.author.username} hugs ${message.mentions.members.first().user.username}!** ( つ´∀｀)つ`)
        .setImage(`${url}`)
        .setColor("RANDOM")

      message.channel.send({ embed })
}catch(err){
  message.channel.send("Something went wrong!\nError Code: ")
}
}


