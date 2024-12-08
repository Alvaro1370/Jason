//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348109243618";
global.sudo = process.env.SUDO || "2348109243618";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1haE5idEl6MEt1YTN2UTZibkNnZE5aSU5tZDBqdkZTMHV2MXNMb0Ftcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXVSaUNhYndRd3E4RTh1c1VRS3RKUWpFZTNYVmMrc3NxYkJ5WXNzK21YOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS1Fpd0wrb05ZcW5WemNnSllFWHZ6YzNoTllqZkplRDdhN1l3bDI3TGxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSTRkaGwyZjNFYzFSYjhKTmlBcXQxOFdQOXB2Rld5V0h1Mkpzb0k5WWl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKOW9kRlNlSlRBRE0zQVczT2lhd3Nncll4VUxJZmdGR1ZGNHJhZmdPV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR6M3UxOWhnRTlwaHdvWE4zbk50MVEvK3hpc3RkM09CUFpXVU9qZGh1UzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0t0UTE2ZkRoTWtNbzREbCt3U29hZGhVSnlacitDdGZiZVpOOHdLL3JrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTJWcG1TQUY1OGJwVXFOZ3MreUtjNFVtWlZkMkZNSWRtNEdySUdYUjlWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFb1JWTFozLzY3RjBLdWwrNG5JSDR1bGhiSVhTV01mbDZ1dy9UL2VNSFlEVTZTRjJ6TklTSCt2V1VSVGk2SllFTUw2cFgrVEV1YUJ5VzdHR1lHOGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IktkOVA0Z2FDT3pIZFVSeVBWa2hYdWd5OERZZW0vczYyaUwwaTlRdWlPaDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjUwTGotM1pZVG11eEwzUEpzSnEzb0EiLCJwaG9uZUlkIjoiZTgyYTIyYmEtZDIwYS00MjQwLTkxMjYtNDQ3Y2FlMDA5NGU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY0TEJYL2FpMmF3NC96REx4UHdQMno2dE4zWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMXUzQjNwR3VzVmZDVUV2OTRiUElXQ1hNMVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkZMNExFVkMiLCJtZSI6eyJpZCI6IjIzNDkwNDk1MTQ5MjY6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXIg4oCiIENKQVkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pXKzI1MERFTzJNMkxvR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRYR1g0cVFKTk16dXQ5dnJrZXF5ZXVNTUxLNFFnVXdzY1I5VzhNdXA1aEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxtVms0NWJhNllmV2lrN2VjcTM1dUpHVTFMUnRjRm93anNONStMU2VVWFB1ZGlEMXhja0RkZVNLeURRTi83bjh5QTUxaHpWaUtnc3R2Y1pYWk0rdGpBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNMVhVbDVWaGlST3c2eXV5UWVIQVBwclNDTnA3dlZVOEFiUi90R1Frb1Y0QnpwSWh4Q2ZKcFRXYXdReHZZUlh5SFdYTXZvc21hajNkNHNZVVdsS1ZqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNDk1MTQ5MjY6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlZ4bCtLa0NUVE03cmZiNjVIcXNucmpEQ3l1RUlGTUxIRWZWdkRMcWVZUSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzY5MTAwMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKT1oifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
