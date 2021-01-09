const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
const izex = new Discord.MessageEmbed()
.setColor("#fffff")
  .addField("= İSTATİSTİKLER =",`**
• Bellek kullanımı => ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Çalışma süresi   => ${duration}
• Kullanıcılar     => ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Sunucular        => ${client.guilds.cache.size.toLocaleString()}
• Kanallar         => ${client.channels.cache.size.toLocaleString()}
• Discord.JS sürüm => v${Discord.version}**`);
 msg.channel.send(izex)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
//izexlesh