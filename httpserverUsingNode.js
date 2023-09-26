/*
Node is runtime environment for javascript outside browser
Web server get request from client and return web page as a response to the client or browser.
 */

const http = require("http");
const hostname = "127.0.0.1"
const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/plain");
//     res.end("First HTTP server");
// })

// server.listen(port,hostname,()=>{
//     console.log(`server is running on at http://${hostname}:${port}/`);
// });

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    // res.statusCode = 200;
    // res.setHeader("Content-Type","text/plain");
    res.write("First HTTP server");
    res.end();
    // res.end("First HTTP server");
}).listen(port,hostname,()=>{
    console.log(`server is running on at http://${hostname}:${port}/`);
});