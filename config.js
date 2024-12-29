const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV7ZKiRhR9l/6rsyMfClg1VUEEFD8BFTWbSrXQYCs02DQqbk1qHyF5xn2RFOrETbK7mfSvW9B97rn3nj79CZAU52iAStD+BDKKj5ChKmRlhkAbdIowRBTUQQAZBG2QdAfLzYjNHDGmpZluDnkrOXT6UWvp1MY12kTWaWvVLg2B+C/gtQ6yYhNj/weAceDHR38c9DRouqbRSXR+WzPly2kzsId86HjxYjpOllNWnl7Aa4UIMcUk0rMtShCF8QCVU4jp++jrg+VRNIZl39s4kUOd89rnuuxSM+Eow9v1NNQ2nWQ97in76H301VA0D12H06axjdbqSrBKbUwu6u4gD8wIFtLSCJ5Nz5FV9UY/xxFBQT9AhGFWvrvvAytThGJlzPwcJ2jSgu65Bs8SsoznrbiuHSPJugR56Klz8X3E4Wg1ofLGMhEfdvKdQAXV1/b8bkJnQ6RJLC6g2+A0rRb7XxOf0jet7P9P3/MBszij3Cy9XGgsdufdOfQX3VVgG/FFs7x9A+mzRBqnKvdO+ocFHgcnZltZq989Z/riQCNz6dBe7JZq54CcY3J2l2LkqvaDPmQF/RHLfXfh5lLHjy8mmaXBEpvztbvXrEF4kL3mjEyXyIuHs54yVZo2yVIPX/hx7zltDOAwWor2hNhi4RxqvAYZr5pKJuWDrf1yrWiPyn4A2txrHVAU4ZxRyHBKrt/4Vh3A4OginyJ2bS/YSJrcixFiQj8cbs+Dw1CzT82AUEKOx44Ux74dxLGQhFn6Auogo6mP8hwFPZyzlJYjlOcwQjlo/3ydVFU0RUnKkIUD0AaKKLU4riVxEv9T/uG0hSyHWfaBIAbqIKRpMkKgzWiB6uC6n5c1pdEVNIMzFFHkZJlvGjqvaE1Da3GcqFYVJrecM5ygnMEkA21OEpqiyAmK8PpLHRB0Zjf5VEULXB2EmOZsToosTmHwpq23n9D304IwtyS+VgWIgnbj8RkxhkmUV4UVBFJ/i49Iq+oA7RDGOXqtgwAdsY8qPOCXpyfdbZrOyXPOdOl3YbxM7Kpx25TctshiECqBLD1tQsV/EmFDfpIlcfMUynzAi5IIg6YIqnbcbm515rtCmtZ284MVjzphDbrrsb225wvHwoYf6Fcx3BSAKAreuryB/r7IZukekR/gnvr7bKofL+F8fAl7SUce8ZOjXMI4tL/CvSkLtD893FJLgwpvpA8tR1ItUE2ryvNPMbS51r/1QGC1Gfz2kfx6Xx/Jl8+/u18+//GRXMPeI1Qf4fAR9q/hr39bf4HcAe6H7wfvh6qq7iOv+AaIQRznoA20QekfUGTo42fhRHPTVPVI1SIVPCTyduNvN2q9rC3slrAmhXg07K6IRczWl6YYj6yxS1aTPm54/GYaS5r98g0Q0AaFxa/RRVznu64nBnsWLMRJpzwRRRcnFI5Pkzm5PGtk5XSRQs8RSleWLmmR17GVg3k0WfMCZT3a2gvBnA4n9l6rzc+a+lJlu0n162RKz9d3OTtw/FDsHXui6k2dBnYH66LsR9EsmaRbvKWr5OQ5esQPZso2LFfPc2asaMZtg1zrRzvOaJ7Pe6t12EwMsensd+rNi65eGN/fIHx3iZuwQ4yuln6f+X9J43HFGq/1ryDub8R3ZNzxFs/xfML4tVQMz3O11i/61PNryJpps3nGd3GfGSy5NNFpD14r78hiyMKUJtVTkmwgqIMY5kx9WMQ3XEeW6yAp1SxzGWRvzgLUao0sGbz+CSNH8Kv7CAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "shalinda",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " shalinda",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'SHALI_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

