/*
fs -> file system
*/
const fs = require("fs");

// Asynchronus Read

// fs.readFile("new.js",'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// Synchronus Read

// const data = fs.readFileSync("new.js",{encoding:'utf-8',flag:'r'});

// console.log('data', data)

// fs.stat('new.js',(err,stat)=>{
//     if(err) throw err
//     console.log('stat', stat.isFile())
//     console.log('stat.size', stat.size)
// })


// Sync write

// fs.writeFileSync("temp.txt","This is the file created from writeFileSync function");

// Asynchronus write

// fs.writeFile("temp.txt","This is file created from writeFile function",{flag:'a'},(err)=>{
//     if(err) throw err;
//     console.log("Done");
// });


// Delete file
fs.unlink('temp.txt',(err)=>{
    if(err) throw err
    console.log('Done')
})