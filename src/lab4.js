/**
 Todo: Complete this lab 

 - Add a new task in scripts of package.json to run `lab4.js`
 - Use argv of process module to get `filename` (a path to an existing file './utils/content.txt') and `text` (a text)
 - Use writeFile of fs module to write text in filename
 - Use readFile of fs module to read nameFile
 */

const fs = require("fs");

const filename = process.argv[2]; // Todo;
const content = process.argv[3]; // Todo;

console.log(process.argv)
// Todo writeFile
fs.writeFile(filename, content, (err) =>{
    if (err) {
        console.error("err", err);
    }else{
        console.log("\n\n *** file save!!")
    }
    })

// Todo readFile
