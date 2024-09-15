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
  sessionName:process.env.SESSION_ID || "SUHAIL_20_23_09_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICA4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKcURHbHloWXZVLzgxTXhEd2dkc2dyWjlmZUJOVVpqNzR6d1pVVGVoVnpBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4S3Zqb2xoRFRneXhTNEZBeUJieVNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2OWFhNmU0LWU0MjktNGY2OS05ZGE0LWYwODNiZWUwYWU4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICA4LFxuICAgICAgMjMwLFxuICAgICAgMjI4LFxuICAgICAgMTYsXG4gICAgICA3LFxuICAgICAgMzAsXG4gICAgICAyNDEsXG4gICAgICA5NyxcbiAgICAgIDIyNyxcbiAgICAgIDE0MixcbiAgICAgIDIwMyxcbiAgICAgIDU5LFxuICAgICAgMjQ4LFxuICAgICAgMjExLFxuICAgICAgMjYsXG4gICAgICAyLFxuICAgICAgMjMwLFxuICAgICAgMjAwLFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAxNzYsXG4gICAgICA0NixcbiAgICAgIDI0MyxcbiAgICAgIDE2MyxcbiAgICAgIDIxOCxcbiAgICAgIDIxNyxcbiAgICAgIDI0MyxcbiAgICAgIDYyLFxuICAgICAgMjEsXG4gICAgICAxNCxcbiAgICAgIDE1MyxcbiAgICAgIDEyLFxuICAgICAgNzMsXG4gICAgICAyMDksXG4gICAgICAyMjksXG4gICAgICAxMjgsXG4gICAgICAxMTMsXG4gICAgICAxMzYsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFOFkyVEJQQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNjg3NjM1Nzo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY5MTY2MzYzNDQ3NDY4Ojc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tTm10UUNFTE9FbmJjR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjkyK213dER5WXAxRkVSc1VKdEZFTHdsMzcvUURlNE04OGVpSnlSTDNpZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwTUFrZXN0eGl0SVZhOU5IcWtCb0J2eWdKTzljbDFjYVYwUVJkd2U2cFBPTGo0L3AxcWdwSUdiZ3NVSEl1N282UE95MlRYNTdTOFZYQ3ZnbFJIc1lBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyREVDRUV2U3RNMWV4U2VHd1VxbmVvWnYrcWp4eTA0RnJ2ZWVqbGhkOXAzQlg3VWxva0JwMU1vTCtJMUp0NVNRQUY1SFVJbkFEL0s4YUFYYnZDTkZCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM2ODc2MzU3Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjQzMTc5OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
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
 
