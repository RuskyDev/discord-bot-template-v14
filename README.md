# Discord Bot Template (v14)
A highly advanced Discord bot template featuring event handling and command handling with both prefix and slash commands.

## Features
- Event Handling
- Command Handling (Prefix + Slash Commands)
- Cooldown Handling

## Templates
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

## Contributions & Bug Reports
If you encounter any bugs, feel free to open an [issue](https://github.com/RuskyDev/discord-bot-template-v14/issues) or join my [Discord server](https://discord.gg/MAnvhWJvsC) and Contributions are welcome! Be sure to check out the [issues](https://github.com/RuskyDev/discord-bot-template-v14/issues) tab for ways to help.
