const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', message => {
    if(message.content === "!ping") message.reply("Pong!");
});

// GitHub Actions Secret'i burada kullan
client.login(process.env.TOKEN).catch(err => console.error("Token hatalı veya bot ekli değil:", err));
