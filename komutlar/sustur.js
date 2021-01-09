const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField(':warning: Uyarı :warning:', '`sustur` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.cache.cache.find('name', 'mod-log');
  let muteRole = client.guilds.cache.get(message.guild.id).roles.cache.cache.find('name', 'Susturulmuş');
  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.').catch(console.error);
  if (!muteRole) return message.reply('`Susturulmuş` adlı bir rol bulamıyorum.').catch(console.error);
  if (reason.length < 1) return message.reply('Susturma sebebini yazmalısın.').catch(console.error);
  if (message.mentions.users.cache.size < 1) return message.reply('Kimi susturacağını yazmalısın.').catch(console.error);
  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Susturma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.cache.has(muteRole.id)) {
    message.guild.member(user).roles.remove(muteRole).then(() => {
      guild.channels.cache.get(modlog.id).send(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).roles.add(muteRole).then(() => {
      guild.channels.cache.get(modlog.id).send(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'sustur [kullanıcı] [sebep]'
};
//izexlesh