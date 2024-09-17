# Discord Bot Template (v14)
A highly advanced Discord bot template featuring event handling and command handling with both prefix and slash commands.

# Features
- Event Handling
- Command Handling (Prefix + Slash Commands)
- Cooldown Handler
- Easy-to-Read Code & Highly Optimized

# Templates
Example Slash Command:
```js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
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
// This is an example event, modify it to suit your needs. This is just a boilerplate.

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

# Credits
- RuskyDev (Lead Programming)
- ChatGPT 4o-mini (Code Assistance and Repair)



