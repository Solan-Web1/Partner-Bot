

const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "hostsolan");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
  `Servers: ${client.guilds.size} | Users: ${client.users.size}`,
    `By Solan`,
    `SOLAN Is One`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "http://www.twitch.tv/faith"
    });
  }, 3000);
});

// ======== { • REPLAY • }======== //

client.on("message", SOLAN => {
  if (SOLAN.content.startsWith("reklam")) {
    SOLAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SOLAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SOLAN => {
  if (SOLAN.content.startsWith("riklam")) {
    SOLAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SOLAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SOLAN => {
  if (SOLAN.content.startsWith("reklam dagornawa")) {
    SOLAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SOLAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SOLAN => {
  if (SOLAN.content.startsWith("reklam agornawa")) {
    SOLAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SOLAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SOLAN => {
  if (SOLAN.content.startsWith("slaw reklam dagornawa")) {
    SOLAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SOLAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SOLAN => {
  if (SOLAN.content.startsWith("slaw reklam agornawa")) {
    SOLAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SOLAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SOLAN => {
  if (SOLAN.content.startsWith("رێکلام")) {
    SOLAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SOLAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", SOLAN => {
  if (SOLAN.content.startsWith("سڵاو رێکلام دەگۆرنەوە")) {
    SOLAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SOLAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

// ======== { • REKLAM • }======== //

client.on("ready", () => {
  var join = client.channels.get("814262869066514452"); /// ئاید ڤۆیس
  if (join) join.join();
});

client.on("message", solan => {
  if (solan.channel.type === "dm") {
    if (solan.content.startsWith("https://discord.gg/")) {
      solan.author.send(`> **تـۆش ریکلام بۆ ئـەم سێرڤـەرە بکە **  
https://discord.gg/EcaVDQR2Sa`); /// لینکە سیرڤەرە خۆت

      client.channels.get("814262843779842058").send(
 
        `> نێردرا لەلایەن  <@${solan.author.id}> 
${solan.content}`
      );
    }
  }
});

// ======== { • TOKENN • }======== //

client.login(process.env.token);

