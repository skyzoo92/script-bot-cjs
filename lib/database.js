module.exports = (m) => {
  const isNumber = (x) => typeof x === "number" && !isNaN(x);
  const delay = (ms) =>
    isNumber(ms) && new Promise((resolve) => setTimeout(resolve, ms));
   let user = global.users = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
user = global.db.data.users[m.sender]
if (user) {
    const defaultVals = {
                    exp: 0,
                    limit: 1000,
                    command: 0,
                    commandTotal: 0,
                    commandLimit: 100,
                    joinlimit: 0,
                    spammer: 0,
                    money: 10000,
                    bank: 0,
                    health: 100,
                    tiketcoin: 0,
                    healtmonster: 100,
                    armormonster: 0,
                    lastclaim: 0,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    afkReason: '',
                    pasangan: '',
                    sahabat: '',
                    banned: false,
                    premium: false,
                    moderator: false,
                    online: false,
                    acc: 0,
                    end: 0,
                    warn: 0,
                    count: 0,
                    pc: 0,
                    expg: 0,
                    level: 0,
                    role: 'Beginner',
                    autolevelup: true,
                    saldo: 0,

                    potion: 10,
                    trash: 0,
                    sampah: 0,
                    wood: 0,
                    rock: 0,
                    string: 0,

                    emerald: 0,
                    diamond: 0,
                    berlian: 0,
                    emas: 0,
                    gold: 0,
                    iron: 0,
                    
                    pisang: 0,
                    anggur: 0,
                    mangga: 0,
                    jeruk: 0,
                    apel: 0,
                    bibitpisang: 0,
                    bibitanggur: 0,
                    bibitmangga: 0,
                    bibitjeruk: 0,
                    bibitapel: 0,
                    gardenboxs: 0,
                    spagety: 0,
                    stamina: 0,
                    bensin: 0,
                    
                    botol: 0,
                    kardus: 0,
                    kaleng: 0,
                    aqua: 0,
                    kayu: 0,
                    batu: 0,
                    kapak: 0,
                    obat: 0,
                    clan: 0,
                    pickaxe: 0,

                    cupon: 0,
                    gems: 0,
                    boxs: 0,
                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    pet: 0,
                    ramuan: 0,
                    
                    ramuannagalast: 0,
                    ramuankyubilast: 0,
                    ramuanphonixlast: 0,
                    ramuanserigalalast: 0,
                    ramuancentaurlast: 0,
                    ramuankudalast: 0,
                    ramuankucinglast: 0,
                    ramuanrubahlast: 0,
                    ramuangriffinlast: 0,
                    ramuanherolast: 0,

                    horse: 0,
                    horseexp: 0,
                    cat: 0,
                    catngexp: 0,
                    fox: 0,
                    foxexp: 0,
                    dog: 0,
                    dogexp: 0,
                    
                    hero: 1,
                    exphero: 0,
                    pillhero: 0,
                    herolastclaim: 0,
                    
                    udang: 0,
                    hiu: 0,
                    lobster: 0,
                    kumba: 0,
                    ikan: 0,
                    buntal: 0,
                    gurita: 0,
                    dory: 0,
                    cumi: 0,
                    kepiting: 0,
                    paus: 0,
                    orca: 0,
                    umpan: 0,
                    pancingan: 1,
                    anakpancingan: 0,
                    
                    anakkucing: 0,
                    anakkuda: 0,
                    anakrubah: 0,
                    anakanjing: 0,
                    anakserigala: 0,
                    anaknaga: 0,
                    anakphonix: 0,
                    anakkyubi: 0,
                    anakgriffin: 0,
                    anakcentaur: 0,
                    
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    rubah: 0,
                    rubahlastclaim: 0,
                    serigala: 0,
                    serigalalastclaim: 0,
                    naga: 0,
                    nagalastclaim: 0,
                    phonix: 0,
                    phonixlastclaim: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    kyubi: 0,
                    kyubilastclaim: 0,
                    griffin: 0,
                    griffinlastclaim: 0,
                    centaur: 0,
                    centaurlastclaim: 0,
                    
                    makananpet: 0,
                    makananphonix: 0,
                    makanannaga: 0,
                    makanangriffin: 0,
                    makanankyubi: 0,
                    makanancentaur: 0,

                    horselastfeed: 0,
                    catlastfeed: 0,
                    foxlastfeed: 0,
                    doglastfeed: 0,

                    armor: 0,
                    armordurability: 0,
                    weapon: 0,
                    weapondurability: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    
                    judilast: 0,
                    reglast: 0,
                    unreglast: 0,
                    snlast: 0,
                    spinlast: 0,
                    
                    kerjasatu: 0,
                    kerjadua: 0,
                    kerjatiga: 0,
                    kerjaempat: 0,
                    kerjalima: 0,
                    kerjaenam: 0,
                    kerjatujuh: 0,
                    kerjadelapan: 0,
                    kerjasembilan: 0,
                    kerjasepuluh: 0,
                    kerjasebelas: 0,
                    kerjaduabelas: 0,
                    kerjatigabelas: 0,
                    kerjaempatbelas: 0,
                    kerjalimabelas: 0,
                    kerjaenambelas: 0,
                    kerjatujuhbelas: 0,
                    kerjadelapanbelas: 0,
                    kerjasembilanbelas: 0,
                    kerjaduapuluh: 0,
                    kerjaduasatu: 0,
                    kerjaduadua: 0,
                    kerjaduatiga: 0,
                    kerjaduaempat: 0,
                    kerjadualima: 0,
                    kerjaduaenam: 0,
                    kerjaduatujuh: 0,
                    kerjaduadelapan: 0,
                    kerjaduasembilan: 0,
                    kerjatigapuluh: 0, 
                    
                    lastramuanclaim: 0,
                    lastpotionclaim: 0,
                    laststringclaim: 0,
                    lastswordclaim: 0,
                    lastweaponclaim: 0,
                    lastsironclaim: 0,
                    lastsmancingclaim: 0,
                    
                    lastmancingeasy: 0,
                    lastmancingnormal: 0,
                    lastmancinghard: 0,
                    lastmancingextreme: 0,
                    lastwarpet: 0,
                    lastspam: 0,
                    lastpekerjaan: 0,
                    lastclaim: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastcrusade: 0,
                    lastduel: 0,
                    lastcode: 0,
                    lastlink: 0,
                    lastnambang: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                    lastrob: 0,
                    lastbunuhi: 0,
                    lastopen: 0,
                    lasteasy: 0,
                    lastmulung: 0,
                    lastdagang: 0,
                    lastnebang: 0,
                    lastberkebon: 0,
                    lastadventure: 0,
                    lastberburu: 0,
                    lastngojek: 0,
    }

    for (let key in defaultVals) {
        if (!(key in user)) user[key] = defaultVals[key]
    }
}
                let chat = global.db.data.chats[m.chat]
                if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
                if (chat) {
                    if (!('isBanned' in chat)) chat.isBanned = false
                    if (!('welcome' in chat)) chat.welcome = true
                    if (!('detect' in chat)) chat.detect = false
                    if (!('sWelcome' in chat)) chat.sWelcome = 'Selamat datang @user!'
                    if (!('sBye' in chat)) chat.sBye = ''
                    if (!('sPromote' in chat)) chat.sPromote = '@user telah di promote'
                    if (!('sDemote' in chat)) chat.sDemote = '@user telah di demote'
                    if (!('delete' in chat)) chat.delete = true
                    if (!('antiVirtex' in chat)) chat.antiVirtex = false
                    if (!('antiLink' in chat)) chat.antiLink = false
                    if (!('badword' in chat)) chat.badword = false
                    if (!('antiSpam' in chat)) chat.antiSpam = false
                    if (!('freply' in chat)) chat.freply = false
                    if (!('antiSticker' in chat)) chat.antiSticker = false
                    if (!('anticall' in chat)) chat.antiCall = true
                    if (!('stiker' in chat)) chat.stiker = false
                    if (!('viewonce' in chat)) chat.viewonce = false
                    if (!('useDocument' in chat)) chat.useDocument = false
                    if (!("member" in chat)) chat.member = []
                    if (!isNumber(chat.chat)) chat.chat = 0
                    if (!('antiToxic' in chat)) chat.antiToxic = false
                    if (!isNumber(chat.expired)) chat.expired = 0
                } else global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '*promoted new admin:* @user',
                    sDemote: '*demoted from admin:* @user',
                    delete: true,
                    antiLink: true,
                    stiker: false,
                    antiSticker: true,
                    antiCall: true,
                    antiSpam: true,
                    freply: false,
                    viewonce: false,
                    useDocument: true,
                    antiToxic: true,
                    member: [],
                    chat: 0,
                    expired: 0,
                }
                 let akinator = global.db.data.users[m.sender].akinator
			if (typeof akinator !== 'object')
				global.db.data.users[m.sender].akinator = {}
			if (akinator) {
				if (!('sesi' in akinator))
					akinator.sesi = false
				if (!('server' in akinator))
					akinator.server = null
				if (!('frontaddr' in akinator))
					akinator.frontaddr = null
				if (!('session' in akinator))
					akinator.session = null
				if (!('signature' in akinator))
					akinator.signature = null
				if (!('question' in akinator))
					akinator.question = null
				if (!('progression' in akinator))
					akinator.progression = null
				if (!('step' in akinator))
					akinator.step = null
				if (!('soal' in akinator))
					akinator.soal = null
			} else
				global.db.data.users[m.sender].akinator = {
					sesi: false,
					server: null,
					frontaddr: null,
					session: null,
					signature: null,
					question: null,
					progression: null,
					step: null, 
					soal: null
				}
                let settings = global.db.data.settings
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = true 
                if (!('autoread' in settings)) settings.autoread = true
                if (!('restrict' in settings)) settings.restrict = true
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!('restartDB' in settings)) settings.restartDB = 0
                if (!isNumber(settings.status)) settings.status = 0 // ini buat data set Status, tambah disini
                if (!('anticall' in settings)) settings.anticall = true
                if (!('clear' in settings)) settings.clear = true
                if (!isNumber(settings.clearTime)) settings.clearTime = 0
                if (!('freply' in settings)) settings.freply = true
                if (!('akinator' in settings)) settings.akinator = {}
            } else global.db.data.settings = {
                self: true,
                autoread: true,
                restrict: true,
                autorestart: true,
                restartDB: 0,
                status: 0, // disini juga,
                anticall: true, // anticall on apa off?
                clear: true,
                clearTime: 0,
                freply: true,
                akinator: {}
            }
            let bot = global.db.data.bots
            if (typeof bot !== 'object') global.db.data.bots = {}
            if (bot) {
                if (!('replyText' in bot)) bot.replyText = {}
                if (!('rating' in bot)) bot.rating = {}
            } else global.db.data.bots = {
                replyText: {},
            	rating: {},
            }  
              let member = global.db.data.chats[m.chat].member[m.sender]
            if (typeof member !== 'object') global.db.data.chats[m.chat].member[m.sender] = {}
            if (member) {
            if (!isNumber(member.command))
               member.command = 0
           if (!isNumber(member.commandTotal))
              member.commandTotal = 0
            } else global.db.data.chats[m.chat].member[m.sender] = {
                command: 0,
                commandTotal: 0,
            }
}