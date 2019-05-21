const Discord = require('discord.js');
const config = require('./config.json');
// Initialize Discord Bot
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log('Connected');    
});
bot.on('message', msg => {
    // Our bot needs to know if it will execute a command
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
            default: console.log(`Unhandled case: ${cmd}`)
         }     
});
// Start Discord bot
bot.login(config.token);