const { Client, Collection, GatewayIntentBits, ActivityType, GuildPresences } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const { TOKEN, CLIENT_ID, PREFIX, ACTIVITY_NAME, ACTIVITY_STATUS, ACTIVITY_TYPE } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();
client.prefixCommands = new Collection();
client.cooldowns = new Collection();

const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        if (folder === 'slash') {
            client.commands.set(command.data.name, command);
        } else if (folder === 'prefix') {
            client.prefixCommands.set(command.name, command);
        }
    }
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.login(TOKEN);
