/**
 Todo: Complete this lab 

 - Explore node `http` module
 - Create an http server on the port 3000
 - Create a handler of 
    - '/' req that serves to the client the following:
        A text: Hello, this is http node module 
        And a link: <a href="/">Dashbaoard -></a> 
    - '/dashboard' that serves to the client the following: 
        <h1>Dashbaoard</h1>
        <main>Basic routing using node http server</main>
        <a href="/">back home</a>
 
 */

        const http = require("http");

        const server = http.createServer((req, res) => {
            if (req.url === "/") {
                res.write("<h1>Hello, this is http node module</h1>");
                res.write("<a href='/dashboard'>Dashbaoard -></a>");
                res.end();
            } else if (req.url === "/dashboard") {
                res.write("<h1>Dashbaoard</h1>");
                res.write("<main>Basic routing using node http server</main>");
                res.write("<a href='/'>back home</a>");
                res.end();
            }
            });
        
        server.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });