const Discord = require('discord.js');
// Initialize Discord client
const client = new Discord.Client();
client.music = require("discord.js-musicbot-addon");
// // Configure client
client.on('ready', () => {
    console.log('Connected');    
});
client.on('message', msg => {   
    if(!msg.content.startsWith(system.env.prefix) || msg.author.bot) return;

    const args = msg.content.slice(system.env.prefix.length).split(' ');
    const cmd = args.shift().toLowerCase();
    musicCommands = ['help', /*'play'*/, 'search', 'skip', 'queue', 'pause', 'resume',
        'remove', 'volume', 'leave', 'clearqueue', 'np'];

    if(musicCommands.includes(cmd)){
        return;
    }
         
    functions = {
        'ping': (msg, args) => {
            const then = Date.now();
            msg.channel.send('Pinging...').then(m => m.edit(`Pong! It took ${Date.now() - then}ms to send`));
        },
        'play': (msg, args) => {
            args.length == 0 ? client.music.bot.resumeFunction(msg) : client.music.bot.playFunction(msg, args[0]);
        }
    }

    functions.hasOwnProperty(cmd) ? functions[cmd](msg, args) : msg.channel.send('Error: command not found.');
});
// Start Discord client
client.music.start(client, {
    youtubeKey: system.env.youtubeKey,
    botPrefix: system.env.prefix,
    bitRate: "320000",
    defVolume: 30,
    bigPicture: true,
    play: {
        enabled: false
    }
  });
client.login(system.env.token);
