const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    //Without stream : readFile function takes more time when we have large file

    // fs.readFile("package.json",(err,data)=>{
    //     res.end(data);
    // })

    // With stream : If we use stream then for a large file we can read it easily

    const stream = fs.createReadStream("package.json");
    stream.pipe(res); // Using pipe method we send chunk data 

})

server.listen(3000,()=>{console.log("Listening")});