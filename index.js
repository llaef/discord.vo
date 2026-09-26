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
    const channelId ='1553108072510259330';
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

// البوت يقرا التوكن أوتوماتيكياً من Railway
client.login(process.env.DISCORD_TOKEN);
