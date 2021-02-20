const { MessageEmbed } = require("discord.js");
const moment = require('moment-timezone');
module.exports.help = {
  name: "times"
}   
module.exports.run = async (bot, message, args) => {
var currentTime = moment()
var fixedcurr = moment(currentTime).format("hh:mm:ss, a");
const berlina = moment().tz("Europe/Berlin").format("hh:mm:ss, a");
const los = moment().tz("America/Los_Angeles").format("hh:mm:ss, a");
const newyorka = moment().tz("America/New_York").format("hh:mm:ss, a");
const toronta = moment().tz("America/Toronto").format("hh:mm:ss, a");
const shangh = moment().tz("Asia/Shanghai").format("hh:mm:ss, a");
const urumu = moment().tz("Asia/Urumqi").format("hh:mm:ss, a");
const londona = moment().tz("Europe/London").format("hh:mm:ss, a");

const embed = new MessageEmbed()
  .setTitle('Time')
  .setDescription(`Get the time of places`)
  .setColor("RANDOM")
  .addField(":flag_eu: Berlin (GERMANY):", berlina, true)
  .addField(":flag_eu: London (ENGLAND):", londona, false)
  .addField(":flag_us: Los Angles (UNITED STATES):", los, false)
  .addField(":flag_us: New York (UNITED STATES):", newyorka, true)
  .addField(":flag_ca: Toronto (CANADA):", toronta, false)
  .addField(":flag_cn: Shanghai (CHINA):", shangh, false)
  .addField(":flag_cn: Urumqi (CHINA):", urumu, true)
  .addField(":stopwatch: Request time:", fixedcurr, false)

  message.channel.send({ embed })
}
