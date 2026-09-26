const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is alive and running!');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 const channelId = '123456789012345678'; 
    const channel = client.channels.cache.get(channelId);

    if (channel) {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        console.log(`Successfully connected to ${channel.name}`);
    } else {
        console.log("Voice channel not found or invalid ID!");
    }
});

client.login(process.env.DISCORD_TOKEN);
