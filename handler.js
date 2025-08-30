const simple = require('./function/simple')
const util = require('util')
const { color } = require('./function/color')
const moment = require('moment-timezone')
const fs = require('fs')
const fetch = require('node-fetch')


const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    async handler(chatUpdate) {
        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
    
        if (!chatUpdate) return
        this.pushMessage(chatUpdate.messages).catch(console.error)
   
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]
        global.settings = global.db.data.settings
        global.fkontak = global.fkontak
        if (!m) return
     
        try {
            m = simple.smsg(this, m) || m
            if (!m) return
        
            m.exp = 0
            m.limit = false
            try {
           require("./lib/database.js")(m)
        } catch (e) {
            console.error(e)
        }
            if (typeof m.text !== 'string') m.text = ''

            const detectwhat = m.sender.includes('@lid') ? '@lid' : '@s.whatsapp.net';
            const ownerNumbers = global.staff.owner.map(v => v.replace(/[^0-9]/g, '')); 
            const mappedOwners = ownerNumbers.map(v => v + detectwhat)
            const isROwner = mappedOwners.includes(m.sender);
            const isOwner = isROwner || m.fromMe
            const isMods = isROwner || global.staff.mods.map(v => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender)
            const isPrems = isROwner || global.staff.prems.map(v => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender) || (db.data.users[m.sender].premiumTime > 0 || db.data.users[m.sender].premium === true);       
            const isBans = global.db.data.users[m.sender].banned
            const isSeller = global.db.data.users[m.sender].seller
            if (isROwner) {
                db.data.users[m.sender].premium = true
                db.data.users[m.sender].premiumDate = "infinity"
               db.data.users[m.sender].limit = "infinity"
                db.data.users[m.sender].moderator = true
                }
            if (!isROwner && isBans) return //m.reply("orang goblok di banned Owner 😂😂😂") 
            
            if (opts['autoread']) await this.readMessages([m.key])
            if (opts['nyimak']) return
            if (
        !m.fromMe &&
        !isROwner &&
        !isPrems &&
        opts["self"]
      )
        return;
            if (opts['pconly'] && !isPrems && m.chat.endsWith('g.us')) return
            if (opts['gconly'] && !m.fromMe && !isPrems && !m.chat.endsWith('g.us')) return conn.reply(m.chat,"🪷 Upgrade Ke Premium Untuk Mengakses Di Private\n\n```Maaf Kamu Memakai Bot Di Private, Kamu Tidak Premium. Jika Ingin Beli Prem Langsung Contact Owner```")
            if (opts['swonly'] && m.chat !== 'status@broadcast') return
            if (opts['queque'] && m.text && !(isMods || isPrems)) {
                let queque = this.msgqueque, time = 1000 * 5
                
                const previousID = queque[queque.length - 1]
                queque.push(m.id || m.key.id)
                setInterval(async function () {
                    if (queque.indexOf(previousID) === -1) clearInterval(this)
                    else await delay(time)
                }, time)
            }

            // for (let name in global.features) {
            //     let plugin = global.features[name]
            //     if (!plugin) continue
            //     if (plugin.disabled) continue
            //     if (!plugin.all) continue
            //     if (typeof plugin.all !== 'function') continue
            //     try {
            //         await plugin.all.call(this, m, chatUpdate)
            //     } catch (e) {
            //         if (typeof e === 'string') continue
            //         console.error(e)
            //     }
            // }

            //if (m.isBaileys) return
            m.exp += Math.ceil(Math.random() * 10)

            let usedPrefix
            let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

            const groupMetadata = (m.isGroup ? (conn.chats[m.chat] || {}).metadata : {}) || {}
        //    const groupMetadata = (m.isGroup ? (conn.chats[m.chat].metadata || await conn.groupMetadata(m.chat)): {}) || {}
            const participants = (m.isGroup ? groupMetadata.participants : []) || []
            const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
            const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
            const isRAdmin = user && user.admin == 'superadmin' || false
            const isAdmin = isRAdmin || user && user.admin == 'admin' || false // Is User Admin?
            const isBotAdmin = bot && bot.admin || false // Are you Admin?
            
            for (let name in global.features) {
                let plugin = global.features[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (typeof plugin.all === 'function') {
                    try {
                        await plugin.all.call(this, m, chatUpdate)
                    } catch (e) {
                        // if (typeof e === 'string') continue
                        console.error(e)
                    }
                }
                const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
                let match = (_prefix instanceof RegExp ? // RegExp Mode?
                    [[_prefix.exec(m.text), _prefix]] :
                    Array.isArray(_prefix) ? // Array?
                        _prefix.map(p => {
                            let re = p instanceof RegExp ? // RegExp in Array?
                                p :
                                new RegExp(str2Regex(p))
                            return [re.exec(m.text), re]
                        }) :
                        typeof _prefix === 'string' ? // String?
                            [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                            [[[], new RegExp]]
                ).find(p => p[1])
                if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    isBans,
                    chatUpdate,
                })) continue
                if (typeof plugin !== 'function') continue
                if ((usedPrefix = (match[0] || '')[0])) {
                    let noPrefix = m.text.replace(usedPrefix, '')
                    let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                    args = args || []
                    let _args = noPrefix.trim().split` `.slice(1)
                    let text = _args.join` `
                    command = (command || '').toLowerCase()
                    let fail = plugin.fail || global.dfail // When failed
                    let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                        plugin.command.test(command) :
                        Array.isArray(plugin.command) ? // Array?
                            plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                                cmd.test(command) :
                                cmd === command
                            ) :
                            typeof plugin.command === 'string' ? // String?
                                plugin.command === command :
                                false

                    if (!isAccept) continue
                    m.plugin = name
                    if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                        let chat = global.db.data.chats[m.chat]
                        let user = global.db.data.users[m.sender]
                        if (name != 'unbanchat.js' && chat && chat.isBanned && !isOwner) return // Except this
                    }
                    if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
    let chat = global.db.data.chats[m.chat] || {}
    let user = global.db.data.users[m.sender] || {}
    let userGroup = chat.member?.[m.sender] || {}
    let setting = global.db.data.settings[conn.user.jid] || {}

    if (name != 'group-info.js' && !isAdmin && chat?.adminOnly)
        return
    if (name != 'group-modebot.js' && name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && (chat?.isBanned || chat?.mute))
        return
    if (name != 'group-unbanuser.js' && name != 'info-cekbanned.js' && (user?.banned || userGroup?.banned))
        return

    if (!name.startsWith("topup") && name != "exp-login.js" && name != "exp-logout.js" && name != "main-premium.js" && name != "main-sewa.js" && name != "info-owner.js" && name != "_orderProses.js" && name != 'exp-daftar.js' && name != 'exp-verified.js' && name != 'info-limit.js' && user.command >= user.commandLimit && !isPrems && Date.now() - user.cmdLimitMsg < 600000)
        return

    if (!name.startsWith("topup") && name != "exp-login.js" && name != "exp-logout.js" && name != "main-premium.js" && name != "main-sewa.js" && name != "info-owner.js" && name != "_orderProses.js" && name != 'exp-daftar.js' && name != 'exp-verified.js' && name != 'info-limit.js' && user.command >= user.commandLimit && !isPrems && Date.now() - user.cmdLimitMsg > 600000) {
        if (setting.composing) await this.sendPresenceUpdate('composing', m.chat).catch(() => {})
        if (setting.autoread) await this.readMessages([m.key]).catch(() => {})
        return m.reply(`Limit command kamu sudah habis ${user.command} / ${user.commandLimit}, Silahkan tunggu limit reset pada jam 12 malam!\n\n${!user.verif ? "_Atau Verifikasi terlebih dahulu menggunakan command *#verif* untuk mendapatkan 1000 command limit_" : "_Atau ke Premium User untuk mendapatkan Unlimited Command Limit_"}`).then(() => {
            user.cmdLimitMsg = Date.now()
        })
    }
if (m.isGroup) {
    if (!chat.member) chat.member = {}
    if (!chat.member[m.sender]) chat.member[m.sender] = {}
    if (!isNumber(chat.member[m.sender].command)) chat.member[m.sender].command = 0
    if (!isNumber(chat.member[m.sender].commandTotal)) chat.member[m.sender].commandTotal = 0
    chat.member[m.sender].command++
    chat.member[m.sender].commandTotal++
    chat.member[m.sender].lastCmd = Date.now()
}
    user.command = (user.command || 0) + 1
    user.commandTotal = (user.commandTotal || 0) + 1
    user.lastCmd = Date.now()
}
                    if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Creator
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.rowner && !isROwner) { // Real Owner
                        fail('rowner', m, this)
                        continue
                    }
                    if (plugin.restrict) { // Real Owner
                        fail('restrict', m, this)
                        continue
                    }
                    if (plugin.owner && !isOwner) { // Number Owner
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.mods && !isMods) { // Moderator
                        fail('mods', m, this)
                        continue
                    }
                    if (plugin.premium && !isPrems) { // Premium
                        fail('premium', m, this)
                        continue
                    }
                    if (plugin.banned && !isBans) { // Banned
                        fail('banned', m, this)
                        continue
                    }
                    if (plugin.group && !m.isGroup) { // Group Only
                        fail('group', m, this)
                        continue
                    } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                        fail('botAdmin', m, this)
                        continue
                    } else if (plugin.admin && !isAdmin) { // User Admin
                        fail('admin', m, this)
                        continue
                    }
                    if (plugin.private && m.isGroup) { // Private Chat Only
                        fail('private', m, this)
                        continue
                    }
                    if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                        fail('unreg', m, this)
                        continue
                    }
                    m.isCommand = true
                    let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                    if (xp > 9999999999999999999999) m.reply('Ngecit -_-') // Hehehe
                    else m.exp += xp
                    if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                        let limit = `━━━━━ *「 ᴀᴄᴄᴇꜱꜱ ᴅᴀɴɪᴇᴅ 」*━━━━━━━
ᴍᴀᴀꜰ ʟɪᴍɪᴛ ᴀɴᴅᴀ ᴛᴇʟᴀʜ ʜᴀʙᴜꜱ
ɴᴀᴍᴜɴ ᴊɪᴋᴀ ɪɴɢɪɴ ʟɪᴍɪᴛ ᴘᴇʀᴍᴀɴᴇɴᴛ ꜱɪʟᴀʜᴋᴀɴ ᴜᴘɢʀᴀᴅᴇ ᴋᴇ *ᴘʀᴇᴍɪᴜᴍ*`
conn.reply(m.chat, limit, m, adReply)
                        continue // Limit habis
                    }
                    if (plugin.level > _user.level) {
                        let level = `━━━━━ *「 ᴀᴄᴄᴇꜱꜱ ᴅᴀɴɪᴇᴅ 」*━━━━━━━
ᴅɪᴘᴇʀʟᴜᴋᴀɴ ʟᴇᴠᴇʟ ${plugin.level} ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ɪɴɪ. ʟᴇᴠᴇʟ ᴋᴀᴍᴜ ${_user.level}`
conn.reply(m.chat, level, m, adReply)
                        continue // If the level has not been reached
                    }
                    let extra = {
                        match,
                        usedPrefix,
                        noPrefix,
                        _args,
                        args,
                        command,
                        text,
                        conn: this,
                        participants,
                        groupMetadata,
                        user,
                        bot,
                        isROwner,
                        isOwner,
                        isRAdmin,
                        isAdmin,
                        isBotAdmin,
                        isPrems,
                        isBans,
                        chatUpdate,
                    }
                    try {
                        await plugin.call(this, m, extra)
                        if (!isPrems) m.limit = m.limit || plugin.limit || true
                    } catch (e) {
                        // Error occured
                        m.error = e
                        console.error(e)
                        if (e) {
                            let text = util.format(e)
                            /*for (let key of Object.values(global.APIKeys))*/

                            if (e.name) for (let [jid] of global.staff.owner.filter(([number]) =>   number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists) m.reply(`━━━━━ *「 ꜱʏꜱᴛᴇᴍ ᴇʀʀᴏʀ 」*━━━━━━━
•> *ᴘʟᴜɢɪɴ:*  ${m.plugin}
•> *ꜱᴇɴᴅᴇʀ:* @${m.sender.split("@")[0]} *(wa.me/${m.sender.split("@")[0]})*
•> *ᴄʜᴀᴛ:* ${m.chat} 
•> *ᴄᴏᴍᴍᴀɴᴅ:* ${usedPrefix + command}

*[!] ᴇʀʀᴏʀ ʟᴏɢ:*

${text}

━━━━━ *「 ꜱʏꜱᴛᴇᴍ ᴇʀʀᴏʀ 」*━━━━━━━`.trim(), data.jid)
                            }
                            m.reply(text)
                        }
                    } finally {
                        // m.reply(util.format(_user))
                        if (typeof plugin.after === 'function') {
                            try {
                                await plugin.after.call(this, m, extra)
                            } catch (e) {
                                console.error(e)
                            }
                        }
 //if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
                    }
                    break
                }
            }
        } catch (e) {
            console.error(e)
        } finally {
            if (opts['queque'] && m.text) {
                const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
                if (quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
            }
            //console.log(global.db.data.users[m.sender])
            let user, stats = global.db.data.stats
            if (m) {
                if (m.sender && (user = global.db.data.users[m.sender])) {
                    user.exp += m.exp
                    user.limit -= m.limit * 1
                }

                let stat
                if (m.plugin) {
                    let now = + new Date
                    if (m.plugin in stats) {
                        stat = stats[m.plugin]
                        if (!isNumber(stat.total)) stat.total = 1
                        if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
                        if (!isNumber(stat.last)) stat.last = now
                        if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
                    } else stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                    stat.total += 1
                    stat.last = now
                    if (m.error == null) {
                        stat.success += 1
                        stat.lastSuccess = now
                    }
                }
            }

            try {
               require('./function/print')(m, this)
            } catch (e) {
                console.log(m, m.quoted, e)
           }
           if (opts['autoread'] || global.settings.autoRead)
                await conn.readMessages([m.key])
        }
    },
    async participantsUpdate({ id, participants, action }) {
        if (opts['self']) return
 
        if (global.isInit) return
        let chat = global.db.data.chats[id] || {}
        let text = ''
        switch (action) {
            case 'add':
            case 'remove':
                if (chat.welcome) {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                    for (let user of participants) {
                        let pp = 'https://i.ibb.co/sQTkHLD/ppkosong.png'
                        let name = await this.getName(user)
                        let gpname = await this.getName(id)
                        let member = groupMetadata.participants.length
                        pp: pp
                        try {
                            pp = await this.profilePictureUrl(user, 'image')
                        } catch (e) {
                        } finally {
                            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', "@" + user.split("@")[0])
                            let wel = pp
                            let lea = pp                   
 this.sendMessage(id, {
text: text,
contextInfo: {
     mentionedJid: [user],
         groupMentions: [],
        isForwarded: true,
        orwardedNewsletterMessageInfo: {
      newsletterJid: global.staff.idsal,
          newsletterName: "🪷 Rapthalia By Hydra",
             serverMessageId: -1
         },
            forwardingScore: 256,
externalAdReply: {
        title: action === 'add' ? `🪷 Selamat Datang Member Baru\n• Nama Group: ${gpname}` : `🔴 Selamat Tinggal\n• Nama Group: ${gpname}`,
        body: `• Total member: ${member}`,
        thumbnailUrl: logo.thumb,
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: true
                  }
             }
        })
                      }
                    }
                }
                break                          
        case 'promote':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, {text: text})
            break
        }
    },
  async delete(m) {
    if (!m || !m.chat || !m.sender) return; // Cegah error kalau null

    let chat = global.db.data.chats[m.chat]
    if (!chat || !chat.delete) return // kalau belum diatur, keluar

    this.reply(m.chat, `
Terdeteksi @${m.sender.split`@`[0]} telah menghapus pesan
ketik *.disable delete* untuk mematikan pesan ini
`.trim(), m)

    // Pastikan m.quoted ada sebelum lanjut
    if (m.quoted) {
        this.copyNForward(m.quoted, m.chat).catch(e => {
            console.log('Gagal copyNForward:', e)
        })
    }
},

  async GroupUpdate({ jid, desc, descId, descTime, descOwner, announce, m }) {
    if (!db.data.chats[jid].desc) return
    if (!desc) return
    let caption = `
    @${descOwner.split`@`[0]} telah mengubah deskripsi grup.
    ${desc}
        `.trim()
    this.sendMessage(jid, caption, { quoted: m })
  }
},

global.dfail = (type, m, conn) => {
    let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

    
  
    
let msg = {
 rowner: `*🪷 fitur ini khusus owner*`,
 owner: `*🪷 fitur ini khusus owner*`,
 mods: `*🪷 fitur ini khusus developer*`,
 group: `*🪷 fitur hanya bisa di group*`,
 banned: `*🪷 yah kamu dibanned owner*`,
 private: `*🪷 fitur ini khusus private*`,
 admin: `*🪷 yah kamu bukan admin*`,
 botAdmin: `*🪷 jadikan rapthalia admin dulu*`,
 restrict: `*🪷 fitur ini di matiin*`
 }[type]
 if (msg) return conn.reply(m.chat, msg, fkontak, global.danied)
 let msg2 = {
 premium: `*• Premium Mode:* This feature is only for premium users`
 }[type]
 if (msg2) return conn.reply(m.chat, msg2, fkontak, global.danied)
 
if (type === 'unreg') {
    let umur = ["17", "20", "19", "18", "15", "16"]
    const umurRandom = umur[Math.floor(Math.random() * umur.length)] // ganti sini

    const buttons = [
        { buttonId: `.register`, buttonText: { displayText: 'MANUAL' }, type: 1 },
        { buttonId: '@verify', buttonText: { displayText: 'OTOMATIS' }, type: 1 },
    ];

    const buttonsMessage = {
        image: { url: "https://files.catbox.moe/ll45by.jpg" },
        caption: "*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪsᴛᴇʀᴇᴅ ʏᴇᴛ* • ᴋᴇᴛɪᴋ  .daftar ᴜɴᴛᴜᴋ ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ",
        footer: "Rapthalia Kawai By Hydra",
        buttons: buttons,
        viewOnce: true, 
        headerType: 4
    };

    return conn.sendMessage(m.chat, buttonsMessage, { quoted: m });
} 
};
    

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    delete require.cache[file]
    if (global.reloadHandler) console.log(global.reloadHandler())
})