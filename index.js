require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.SECRET);

client.on('message', msg => {
    if (msg.content === 'test') {
        msg.reply('YEE');
    }
});

console.log('OK I ONLINE NOW')
client.on('ready', msg => {
    msg.reply('I AM HERE NOW')
})

client.on('messageDelete', msg => {
msg.reply('Has deleted a message')
})

client.on('messageUpdate', msg => {
  msg.reply('edited their message')
})


