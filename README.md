# Discord Bot Template
An advanced template for Discord bots with event handling, prefix and slash commands, user app support, and cooldown management.

## Features  
- Easy event handling  
- Works with prefix and slash commands  
- Supports user apps  
- Manages cooldowns efficiently  

## Templates
Example Slash Command:
```js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!')
        .setIntegrationTypes(0, 1) // 0 for Guild Install, 1 for User Install
        .setContexts(0, 1, 2), // 0 for Guild, 1 for Bot DM, 2 for Group Chat        
    cooldown: 5,
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
```
Example Prefix Command:
```js
module.exports = {
    name: 'ping',
    description: 'Replies with Pong!',
    cooldown: 5,
    execute(message, args) {
        message.channel.send('Pong!');
    },
};
```
Example Event:
```js
module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.bot) return;

        if (message.content.toLowerCase().includes('israel')) {
            message.reply('Fuck Israel');
        }
    },
};
```
.env Format:
```bash
TOKEN=
CLIENT_ID=
PREFIX=!

ACTIVITY_NAME=with /help
ACTIVITY_TYPE=PLAYING
ACTIVITY_STATUS=online
```

## Contributions & Bug Reports
If you encounter any bugs, feel free to open an [issue](https://github.com/RuskyDev/discord-bot-template-v14/issues) or join my [Discord server](https://discord.gg/MAnvhWJvsC) and Contributions are welcome! Be sure to check out the [issues](https://github.com/RuskyDev/discord-bot-template-v14/issues) tab for ways to help.
