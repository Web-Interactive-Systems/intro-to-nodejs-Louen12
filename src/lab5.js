/**
 Todo: Complete this lab 

 - Explore node `path` module
 - Add console log in addition to
  a brief explanation of the most important functions of path module
 
 */

const path = require("path");
console.log(path.dirname(__dirname))
console.log(path.join(__dirname, 'toto'))
console.log(path.basename(__dirname))
console.log(path.extname('labx.png'))
