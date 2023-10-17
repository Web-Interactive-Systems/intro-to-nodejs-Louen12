/**
 Todo: create a function that sets a timeout of 3000ms and 
  do the following inside its callback:
  - console.table an array of elements
  - console.log __dirname
  - console.log __filename
  - console.log require
  - console.log module
  - console.log process
  - console.log window
 */

  setTimeout(() => {
    console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
    console.log(__dirname);
    console.log(__filename);
    //console.log(require);
    //console.log(module);
    //console.log(process);
    //console.log(window);
}, 3000);



