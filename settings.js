const moment = require('moment-timezone')
const Button = require("./lib/Button.js")
global.Func = new (require(process.cwd() + "/lib/func"))();
// Waktu
function wktuwib() {
  let h = moment.tz('Asia/Jakarta').format('HH')
  let m = moment.tz('Asia/Jakarta').format('mm')
  let s = moment.tz('Asia/Jakarta').format('ss')
  return `${h} H ${m} M ${s} S`
}

function date() {
  let d = new Date(new Date() + 3600000)
  let locale = 'id'
  let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
  let week = d.toLocaleDateString(locale, { weekday: 'long' })
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  return `${week}, ${date} | Weton: ${weton}`
}

//Link Social Media
global.link = {
 sig: 'https://instagram.com/boyxiaoo', //instagram
 sgh: '-', //github
 sgc: 'https://chat.whatsapp.com/K266F4XJiz4Gd3ql9YIkMx', //group whatsapp //group whatsapp
 saluran: 'https://whatsapp.com/channel/0029VadrgqYKbYMHyMERXt0e', //saluran whatsapp
 syt: 'https://www.youtube.com/', //youtube
 swa: 'https://wa.me/6287784901856',
//whatsapp
 sfb: 'https://chat.whatsapp.com/K266F4XJiz4Gd3ql9YIkMx',
 tele: 'https://t.me/draa82', //telegram
 sdc: '-', //discord
 snh: 'https://nhentai.net/HaramNgentod' //nhentai
}

//Info Owner & Bot
global.staff = {
 nomorwa: '6287784901856', //whatsapp
 nomorbot: '6281918402014', //nomor Bot
 nomorown: '6287784901856', //nomor Owner
 namebot: 'Rapthalia - AI', //nama Bot
 nameown: 'ʜʏᴅʀᴀ', //nama Owner
 owner: 
  ['6287784901856', "220443541803093"], //put your number here
 mods: ["6287784901856", "220443541803093"], //moderator
 prems: ["6287784901856", "220443541803093"], //prem bukan disini
 idgrup: '120363239877963930@g.us', //digrup buat join only
 idsal: '120363298688453806@newsletter', //idsaluran
 jid: '@s.whatsapp.net',
 isPairing: true //Mau pake pairing? true = idup, false = mati
}

/*Ini Isi dengan Payment kalian masing masing*/
global.pay = {
 pulsa: '081918402014', //pulsa1
 pulsa2: '085173328399', //pulsa2
 ovo: '081918402014', //ovo
 gopay: '081918402014', //gopay
 dana: '087721788835', //dana
 qr: 'https://files.catbox.moe/by3jr4.jpg', //Qris
 sid: 'https://s.id/Genzo82', //s.id
 psaweria: '-' //saweria
}

/* apikey */
global.cpanel = {
 domain: 'https://panel.akadev.my.id/', //domain
 capikey: 'ptlc_X94GgfqZuyml9sBOWjzxswVfrewkIXLozXd8YOZlgI6', //pltc
 apikey: 'ptla_AheBcLbJB2zRui69WlZW1jKVuEGimzZER0R0cHllLzx', //plta
 egg: '15',
 location3: '1'
}

global.apikey = {
 lolkey: '976f74cbe672779b52f156be',
 shanz: 'hydra',
 xkey: 'd90a9e986e18778b',
 xzn: 'FurinaEmde',
 lann: 'p8ADYJib',
 btch: 'obhhAd8R',
 xyro: '3WIq7q3CWt',
 rose: 'e9SZ4XwM7V5WhSr0Dfw5m9dZu5LyKDlEDxvkDLApMXOVsc8SQrbDJaEWWic4xREf',
 skizo: 'Hydra'
}

//Other Settings
global.info = {
 version: '2.0.4',
 ppKosong: 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 wait: '`⏱️ ON PROSES`\n> Rapthalia AI By Hydra',
 eror: '```404 error```',
 dtu: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
 dtc: 'ᴄᴀʟʟ ᴏᴡɴᴇʀ',
 phn: '+62 877-8490-1856',
 date: `${date()}`,
 time: `${wktuwib()}`,
 wm: 'ʀᴀᴘᴛʜᴀʟɪᴀ ᴀɪ', //wm1
 wm2: '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘ʀᴀᴘᴛʜᴀʟɪᴀ - ᴀɪ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷', //wm2
 wm3: '• Rapthalia ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ', //wm3
 prefa: [".", "rapthalia ", "🎇 ", "@6281918402014 "],
 hydra: "`",
 titlebot: '🎋 ┊ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ', 
 footer: 'ʀᴀᴘᴛʜᴀʟɪᴀ AI - Assisten 🍀', 
 stickpack: 'ʀᴀᴘᴛʜᴀʟɪᴀ ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
 stickauth: `☂︎\nR\na\np\nt\nh\na\nl\ni\na\n-\n𝗕\n𝗢\n𝗧\n✦\n\n⫹⫺ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ\nwa.me/${global.staff.nomorbot}`,
 packname: 'sᴛɪᴄᴋᴇʀ ʀᴇǫᴜᴇsᴛ ʙʏ',
 packname2: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʀᴀᴘᴛʜᴀʟɪᴀ ᴀɪ'
}

// Image & Video
global.logo = {
 rapthalia: 'https://files.catbox.moe/68wa8k.jpg',
 thumb: 'https://files.catbox.moe/lrawze.jpg',
 thumb2: 'https://files.catbox.moe/ih3yl8.jpg',
 thumbbc: 'https://telegra.ph/file/05f874dc87f7e27fa8127.jpg',
 giflogo: 'https://files.catbox.moe/68wa8k.jpg',
 thumblvlup: 'https://files.catbox.moe/68wa8k.jpg',
 access_denied: "https://files.catbox.moe/68wa8k.jpg"
}
global.pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';

global.fla = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=";
global.multiplier = 45;

// Button
global.Button = Button

// Menu
global.menu = "button"

// Flaming Text
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='] 


global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

const Jimp = require('jimp');
const fetch = require('node-fetch');

let resizeThumb =  resize(logo.thumb, 300, 250)
global.Thumbnails = resizeThumb;

/*====[ FAKE THUMBNAIL ACCESS DENIED ]======*/

global.danied = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.staff.idsal,
      newsletterName: "🪷 Rapthalia By Hydra",
      serverMessageId: -1
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `UPSS!! AKSES DITOLAK`,
      body: null,
      thumbnailUrl: logo.access_denied,
      sourceUrl: link.sgc,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

/*========[ GLOBAL ADREPLY ]============*/
global.adReply = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.staff.idsal,
      newsletterName: "🪷 Rapthalia - By Hydra ",
      serverMessageId: -1
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `Aku Rapthalia💐`,
      body: info.wm,
      thumbnailUrl: logo.thumb,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

/*=========[ FAKE IG ( SMALL AD REPLY ) ]==============*/

global.fakeig = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.staff.idsal,
      newsletterName: "🪷 Rapthalia By Hydra",
      serverMessageId: -1         
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `Aku Rapthalia💐`,
      body: info.wm,
      thumbnailUrl: logo.rapthalia,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: false
    }
  }
}

async function resize(url, width, height, referer = null) {
  try {
    const fetchOptions = {
      redirect: 'follow',
      headers: {},
    };

    if (referer) {
      fetchOptions.headers['Referer'] = referer;
    }

    const response = await fetch(url, fetchOptions);

    if (response.ok) {
      const finalUrl = response.url;
      const arrayBuffer = await response.arrayBuffer();
      return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error.message);

    try {
      const undiciFetchOptions = {
        redirect: 'follow',
        headers: {},
      };

      if (referer) {
        undiciFetchOptions.headers['Referer'] = referer;
        }

      const arrayBuffer = await undiciFetch(url, undiciFetchOptions).then(response => response.arrayBuffer());
      return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
    } catch (retryError) {
      console.error('Retry Error:', retryError.message);
      return Buffer.from([]);
    }
  }
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

let fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update settings.js");
  delete require.cache[file];
  require(file);
});