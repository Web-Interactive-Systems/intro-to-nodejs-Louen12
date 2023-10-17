const { writeFileSync } = require("fs");
const http = require("http");
const fs = require("fs");
/**
 Todo: Follow the todos in this file to complete it
 */

// Todo run this code only once to generate a big file
// --
// Generate a big file using `writeFileSync`
if (
  !fs.existsSync('./src/utils/big.txt') ||
  fs.statSync('./src/utils/big.txt').size === 0
) {
  Array.from({ length: 100000 }, (_, i) => {
    writeFileSync(
      './src/utils/big.txt',
      `This will be a big text file ${i}\n`,
      {
        flag: 'a',
      }
    ); // flag: "a" for appending
    console.log('file written');
  });
}
// Todo create an http server

// Todo: serve text to the client.
// const bigText = fs.readFileSync('./src/utils/big.txt',
//     { encoding: 'utf8', flag: 'r' }); 
  
// Use fs.createReadStream() method 
// to read the file 
reader = fs.createReadStream('./src/utils/big.txt'); 

const server = http.createServer((req, res) => {
  if (req.url === "/") {
      // res.write(bigText);
      // res.end();
      // Read and display the file data on console 
reader.on('data', function (chunk) { 
  res.write(chunk.toString()); 
}); 
reader.on('end', ()=>{res.end()});
  }
  });

server.listen(2800, () => {
  console.log("Server is listening on port 3000");
});

// Todo: What's the problem?

// Todo: use `createReadStream` to file stream to serve text to the client.

  

