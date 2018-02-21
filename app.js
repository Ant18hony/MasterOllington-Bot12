const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
   console.log("I am online")
});

const prefix = '!';

bot.on("message", message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split("");
    let args = cont.slice(1);

    if(msg === prefix + "PING") {
    message.channel.send("Pong!");
    }
});

bot.on('guildMemberAdd', async member => {
    let guild = member.guild;
    let channel = guild.channels.find('name', 'general');
    if (!channel) return undefined;
    const welcomeEmbed = new Discord.RichEmbed()
    .setAuthor(guild.name, guild.iconURL)
    .setDescription(`Welcome **${member.user.username}** you are the **${guild.memberCount}** Member, we hope you\nEnjoy your stay here!`)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('BLUE')
    .setTimestamp()
    return channel.send(welcomeEmbed);
});


bot.login("NDE0OTc1MzI3OTEyMTk4MTQ0.DWwiiQ.2ccxg9eDWUvXhPtOql5jSxn1oBw")
