/*
Performing the task on perticular path is call routing

 */

const http = require("http");

/*First Way */

// const index = (req,res)=>{
//     res.writeHead(200);
//     res.end(`${req.url}`);
// }

http.createServer((req,res)=>{
    if(req.url === '/'){
        return res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Index with /</title>
        </head>
        <body>
            <h1>This is index page with / url</h1>
        </body>
        </html>`);
    }
    if(req.url === '/first'){
        return res.sendF
    }
    // if(req.url === '/second'){
    //     return index(req,res);
    // }
    // if(req.url === '/third'){
    //     return index(req,res);
    // }
}).listen(3000);

// const route = {
//   "/": (req, res) => {
//     res.writeHead(200);
//     res.end(`${req.url}`);
//   },
//   "/first": (req, res) => {
//     res.writeHead(200);
//     res.end(`${req.url}`);
//   },
// };


// http.createServer((req,res)=>{
//     if(req.url in route) return route[req.url](req,res);
// }).listen(3000);
