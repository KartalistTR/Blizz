const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "🔥-Developer🔥 =✦Ahmet.beysss™→ΙЧ✦ ",
        "TURKIYENIN EN IYI BOTU",
        "💪 7/24 Aktif!",  
        "💡 g!davet | Botumuzu ekleyin",               
        "g!yardım 🔥 + g!davet 🔥 +  g!ailemiz"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/fredeski27");
        }, 2 * 2500);
}