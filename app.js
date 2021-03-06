/*
This is your main.js/index.js.
Make sure when running npm init make sure the entry point is set to app.js
You can also name this file to your likings
*/

//the prefix and token and any other variables you want to add will be help in this main config.json
const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
//const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./src/commands", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Command Deprecated");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./src/commands/${f}`);
    console.log(`${f} | loaded`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`);
});

//Command Manager
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  //Check for prefix
  if(!cmd.startsWith(config.prefix)) return;
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
});
//Token need in token.json
bot.login(token.token);
