const Discord = require('discord.js');
const config = require('./config.json');
// Initialize Discord client
const client = new Discord.Client();
client.music = require("discord.js-musicbot-addon");
// // Configure client
client.on('ready', () => {
    console.log('Connected');    
});
client.on('message', msg => {
    console.log(`Message: ${msg}`);
    // Our client needs to know if it will execute a command
    // It will listen for messages that will start with `!`    
    if(!msg.content.startsWith(config.prefix) || msg.author.bot) return;
    const args = msg.content.slice(config.prefix.length).split(' ');
    const cmd = args.shift().toLowerCase();
    
    switch(cmd) {
            // !ping
            case 'ping':
                const then = Date.now();
                msg.channel.send('Pinging...').then( m => {
                    m.edit(`Pong! It took ${Date.now() - then}ms to send`);
                });
                break;
            case 'play':
                // TODO: handle if suffix empty
                client.music.bot.playFunction(msg, args[0]); 
                break;
            default: console.log(`Unhandled case: ${cmd}`)
         }     
});
// Start Discord client
client.music.start(client, {
    youtubeKey: config.youtubeKey
  });
client.login(config.token);
