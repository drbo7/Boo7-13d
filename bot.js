const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "xxxxxx")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : **تم آلارسال إلى :**`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Lions Throne Bot By Bo7`);
        console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` Lions Throne ©️ `,"http://twitch.tv/dr_booo7")
client.user.setStatus("dnd")
});


client.on('message', function(msg) {
    const prefix = '!'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`معلومات السيرفر :  *${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith("!ping")) {
    message.channel.sendMessage(` ! \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});

client.on('message', message => {
    if(message.content === '!support'){
        message.channel.send('**Join Here  https://discord.gg/8P6megc **')
    }
});

client.on('message', message => {
if(message.content == ('!roles')){
    // By: . Badd
    var roles = message.guild.roles;
    if(roles){
        for(let i=0;i<roles.size;i++){
        var role = message.guild.roles.array();
        role = role.sort((a,b)=> b.position - a.position).join('\n,');
        }// By: . Badd
    }// By: . Badd
 message.channel.send(role);
}// By: . Badd
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***``ضع عدد الرسائل التي تريد مسحها 👌``***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("**\nعدد الرسائل التي تم مسحها: " + textxt + "\n**").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (message.content.startsWith ("!invites")) {
   if(!message.channel.guild) return message.reply('** هـآذا ا لامر فقط للسيرفرات  **');
       var mentionned = message.mentions.users.first();
      var os;
    if(mentionned){
        var os = mentionned.id;
    } else {
        var os = message.author.id;
        
    }
        var oss;
    if(mentionned){
        var oss = mentionned;
    } else {
        var oss = message.author;
        
    }
message.guild.fetchInvites()
.then(invites =>{
if(!invites.find(invite => invite.inviter.id === `${os}`)) return message.channel.send(`**${oss.username}, آنت لاتمتلك آي إنفايت  :x:**`);
message.channel.send(`**__${invites.find(invite => invite.inviter.id === `${os}`).uses}__ لقد دعيت  ${oss.username} !** :chart_with_upwards_trend: `)

})



}

});


client.on('message', message => {
 if (message.content.startsWith('!info')) {
  var norElden= new Discord.RichEmbed()
  .addField('اسم السيرفر ',` **__${message.guild.name}__**`)
      .addField('عدد الاعضاء',`**__${message.guild.memberCount}__**`)
  .setColor('RANDOM')
message.channel.send({ embed: norElden });
  }
});


client.on('message', message => {
    const prefix = '!'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': 🛡 | ايديك', "**"+ `${z.id}` +"**",true)
.addField(': ♨ | Playing','**'+y+'**' , true)
.addField(': 📛 | تاق حسابك',"**#" +  `${z.discriminator}**`,true)
.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});


client.on('message' , message => {
if (message.content === '!help') {
              var embed  = new Discord.RichEmbed()
                .addField("LINKS" ,":small_blue_diamond:  **نسعى لخدمتكم **::small_blue_diamond:  ")
                .addField("broadcast (bc)" ,"الاستخدام: $broadcast <الرساله> , !bc <الرساله>")
                .addField("KICK" ,"الاستخدام: !kick <المستخدم>")
                .addField("ِAVATAR" ,"الاستخدام: !avatar")
                .addField("INFO", "الأستخدام : !info")
                .addField("SAY" ,"الاستخدام: !say <الرساله>")
                .addField("ID" ,"الاستخدام: !id  <لمعرفة حالت حسابك >")
                .addField("SERVER" ,"الاستخدام: !server")
                .addField("INVITE" ,"الاستخدام: !invite <لأضافه البوت لأى سيرفر>")
                .addField("SUPPORT" ,"الاستخدام: !suppport < يرسلك رابط سيرفر الدعم الفني>")
                .addField("CLEAR" ,"الاستخدام: !clear <العدد>")
                .addField("PING", "الأستخدام: !ping")
                .addField("invites", "الاستخدام !invites يعرض لك عدد الاشخاص آلذين اتو من روابطك")
                .addField("NO INVITE LINKE","تم اضافة خاصية منع الانفيتات ")
                .addField("رابط  :: الآستخدام : !رابط ","هاذا الامر لارسال رابط السيرفر لك بالخاص ")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});



client.on('message', message => {
    if(message.channel.type === "dm") return;
       if (message.content === prefix + "bot") {
       let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Servers:globe_with_meridians:" , client.guilds.size)
    .addField("Users:busts_in_silhouette:" , client.users.size)
    .addField("Channels:books:" , client.channels.size)
    message.channel.sendEmbed(embed);
      }
  });
  
  
  
  client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Lions Throne";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })

	client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('376002605966688259');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: ${currentSize}`);
  if (currentSize !== size) channel.setName(`Voice Online: ${currentSize}`);
});
	

client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
