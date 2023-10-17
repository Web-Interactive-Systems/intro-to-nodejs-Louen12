/**
 Todo: Complete this lab by importing the needed 
 module
 and a comment to each function used inside `_os` object to explain 
 ./utils/constants.js and ./utils/helpers.js
 */
const os = require("os");

const _os = {
  name: os.type(),
  release: os.release(),

  totalMem: os.totalmem(),
  //ram total et libre
  freeMem: os.freemem(),
  
  uptime: os.uptime(),
  //temps depuis lequel l'os est démarré
  user: os.userInfo(),
};

console.log(_os);
