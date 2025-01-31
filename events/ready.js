const { REST, Routes, ActivityType, PresenceUpdateStatus } = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const settings = require("../settings");
const logger = require("../helpers/logger");

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

// When the bot starts, this copyright message will be displayed. You can remove it if you prefer.
        console.log(`
 ____            _          
|  _ \ _   _ ___| | ___   _ 
| |_) | | | / __| |/ / | | |
|  _ <| |_| \__ \   <| |_| |
|_| \_\\__,_|___/_|\_\\__, |
                      |___/ 
© 2025 RuskyDev - https://rusky.is-a.dev
`)
        logger.log('info', `Logged in as ${client.user.tag}`);

        const commands = [];
        const commandFiles = fs.readdirSync('./commands/slash').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/slash/${file}`);
            commands.push(command.data.toJSON());
            logger.log('info', 'Slash Command Loader', `Loaded /${command.data.name}`);
        }

        const prefixCommandFiles = fs.readdirSync('./commands/prefix').filter(file => file.endsWith('.js'));

        for (const file of prefixCommandFiles) {
            const commandName = file.replace('.js', '');
            logger.log('info', 'Prefix Command Loader', `Loaded ${settings.PREFIX}${commandName}`);
        }

        const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

        try {
            await rest.put(
                Routes.applicationCommands(process.env.DISCORD_BOT_CLIENT_ID),
                { body: commands },
            );

            logger.log('info', 'Slash Command Loader', 'Successfully registered global application commands.');
        } catch (error) {
            logger.log('error', error);
        }

        client.user.setPresence({
            activities: [{
                name: settings.ACTIVITY_TEXT,
                type: ActivityType[settings.ACTIVITY_TYPE]
            }],
            status: PresenceUpdateStatus[settings.ACTIVITY_STATUS]
        });
    },
};
