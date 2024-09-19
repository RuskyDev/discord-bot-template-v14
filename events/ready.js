const { REST, Routes, ActivityType, GuildPresences } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { TOKEN, ACTIVITY_NAME, ACTIVITY_STATUS, ACTIVITY_TYPE } = process.env;

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`[Bot]: Logged in as ${client.user.tag}`);

        const commands = [];
        const commandFiles = fs.readdirSync('./commands/slash').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/slash/${file}`);
            commands.push(command.data.toJSON());
        }

        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

        try {
            await rest.put(
                Routes.applicationCommands(process.env.CLIENT_ID),
                { body: commands },
            );

            console.log('[Bot]: Successfully registered global application commands.');
        } catch (error) {
            console.error(error);
        }

        client.user.setPresence({
            activities: [{ name: process.env.ACTIVITY_NAME, type: ActivityType[process.env.ACTIVITY_TYPE] }],
            status: ACTIVITY_STATUS,
        });
    },
};
