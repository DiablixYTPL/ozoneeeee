const botconfig = require("./botconfig");
const Discord = require("discord.js")
const prefix = "*"
var nazwabot = "OzoneBOT"

const bot = new Discord.Client({disableEveryone: true })

 
bot.on("ready", async () => {
    bot.user.setActivity('OzoneBOT|*help')
    console.log(`${nazwabot}jest online`)
    const CommandHanler = require("./handlers/commandhandler.js")
    
});
bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()

    //Initialize Commands
    CommandHanler(Discord.Client)

    if(command == "say"){
        message.delete()
        message.channel.send(message.content.slice(prefix.length+3))
       command.delete()
    }




if(command == "help"){
    var embed  = new Discord.MessageEmbed()
    .setTitle("Pomocne komendy bota!")
    .setDescription(" **Ogólne**\n   ```Chwilowo Brak!``` \n **Moderacyjne** \n   ```Brak``` \n **4FUN** ```Coinflip , Say```")

    .setColor(`#ff0000`)
    message.channel.send(embed)
    
     message.delete()
}

if(command == "serwerinfo"){
    var embed = new Discord.MessageEmbed()
    .addField("Nazwa Serwera", message.guild.name, true)
    .addField("Własciciel Serwera ", message.guild.owner.user.tag, true)
    .addField("Data Stworzenia Serwera", message.guild.createdAt, false)
    .addField("Data dołączenia na serwer", message.guild.joinedAt, false)
    .setColor(`#ff0000`)

   message.channel.send(embed)
}

if(command == "coinflip"){
    var wynik = (Math.floor(Math.random() * 2) == 0) ? "Orzeł" : "Reszka"
    var embed = new Discord.MessageEmbed()
    .setTitle("Wynik losowania")
    .setDescription(wynik)
    .setColor("GREEN")
    .setThumbnail(message.author.displayAvatarURL())

     message.channel.send(embed)
}


if(command == "propozycja"){
    message.delete()
    var wiadomosc =  message.content.slice(prefix.length+10)
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.member.user.username, message.author.displayAvatarURL())
    .addField("Propozycja", wiadomosc, false)
    .setColor("#00f00")
    .setFooter(" ? - Tak ;  :nie: - Nie")
    .setThumbnail(message.author.displayAvatarURL())

    message.channel.send(embed).then(async embedMessage =>{
        await embedMessage.react(729705582415839332)
        await embedMessage.react(729705695204737094)
    return
    })
}


});

bot.login(botconfig.token)
