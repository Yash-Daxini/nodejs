/*
Express built on top of node js. So all functionality of node.js can be use in express.It 
 */

// const express = require("express");
// const app = express();

// app.get("/",(req,res)=>{
//     // res.send("/ url");
//     res.sendFile(__dirname + '/index.html')
// })

// app.listen(3000,()=>console.log("Listening"))


/*
Middleware: Middleware works with request and response object. So we can manipulate req and res object using middleware.
Suppose we have authontication in project then flow is like
request -> middleware -> route
middleware is function use for authenticate user
 */

// const express = require("express");
// const app = express();

// /*Simple middleware function*/
// const loger = (req,res,next)=>{
//     console.log("Loger");
//     next();
// }

// /*Another middleware */

// const mid2 = (req,res,next)=>{
//     console.log('Mid2')
//     req.newProperty = "This is custome property";
//     req.currentDate = Date.now();
//     next();
// }

// app.use(loger);
// app.use(mid2);
// app.get("/",(req,res)=>{
//     res.send(`Hello with /  + ${req.newProperty} ${req.currentDate}`);
// })

// app.listen(3000,()=>console.log('Server started'))


/*Serving static files*/

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
// app.use("/public",express.static("static"));
/* Instead of using above line we use path modeule*/
const publicPath = path.resolve(__dirname,"public");
// app.use(publicPath,express.static("static"));



app.get("/",(req,res)=>{
    // res.sendFile(__dirname + '/public/static/contact.html');
    res.sendFile(publicPath+"/static/contact.html");
});

app.listen(3000,()=>console.log(''));