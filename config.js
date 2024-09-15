const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="smithssan6@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d8f7c18771d634b714976.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348136876357" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348136876357";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/d8f7c18771d634b714976.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹 | 🅲🅴🅽🆃",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🅲🅴🅽🆃",
  ownername:process.env.OWNER_NAME|| "❤️‍🩹✝️𝑴𝒚𝒍𝒆𝒔✝️❤️‍🩹"
  sessionName:process.env.SESSION_ID || "SUHAIL_20_12_09_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDMwLFxuICAgICAgICA3MyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc1LFxuICAgICAgICA4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVPTlNXTnA2dlZXZGx0NGZhOUdZSkdZbitPbkNZRVd4c01IcGRxeHdySVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRZNDFKSDBDVHhxaHF3V1haY0lFVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzY4OWQ1OWYtMjQzNy00ODY4LThhYmQtYjRjOWI3YmE0Y2FkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMTUxLFxuICAgICAgMTgsXG4gICAgICAxOTYsXG4gICAgICAxNjcsXG4gICAgICAyNTIsXG4gICAgICAzMSxcbiAgICAgIDE0OSxcbiAgICAgIDksXG4gICAgICAxNzcsXG4gICAgICAxMzAsXG4gICAgICA1LFxuICAgICAgMTk4LFxuICAgICAgMTMzLFxuICAgICAgMjI1LFxuICAgICAgMTQ1LFxuICAgICAgMTEzLFxuICAgICAgMTAyLFxuICAgICAgMTI1LFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAxMzAsXG4gICAgICAxOSxcbiAgICAgIDIyMSxcbiAgICAgIDE2MSxcbiAgICAgIDMxLFxuICAgICAgMTA4LFxuICAgICAgMTEwLFxuICAgICAgMTY0LFxuICAgICAgMTg3LFxuICAgICAgMTk4LFxuICAgICAgNjUsXG4gICAgICAxMzcsXG4gICAgICA1MSxcbiAgICAgIDE1OCxcbiAgICAgIDYsXG4gICAgICA1NixcbiAgICAgIDE3LFxuICAgICAgMjM5LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzZDNDVXMzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzY4NzYzNTc6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2OTE2NjM2MzQ0NzQ2ODo3M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObU5tdFFDRUluL25MY0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm45Mittd3REeVlwMUZFUnNVSnRGRUx3bDM3L1FEZTRNODhlaUp5UkwzaWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM0VlOTgwMi85UTRIVVdJYmM5cDFNQ0wvbExxcks1RzRqZWVvWTJXREtzYmdnTnpoM1pUQlB5clc5dEpxejVxYVBBTVY5SVZvMmg5anBEQTZGa2g0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWlc0WXh2WHpxMGtEMm5XRGRVL3pNVTFObDVWZ2RBdTZveWk3K2JTZ2hUbnprRGNiaWpEd1hvWUtKV3Q0bGFURHNqN0dDaU9IaWpMUnppNjdwb0FSQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjg3NjM1Nzo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY0MzExMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFakhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVqSC5qc29uIjogIntcImtleURhdGFcIjpcIjRVSldZMGRrQ2JqWkFJZTdlQjNSaG9uYWtQbWpQeXE5WTM3OFp2QXFGMUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzEzNDU5NDE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY0MTE5MjAxOThcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
