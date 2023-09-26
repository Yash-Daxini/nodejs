// const http = require("http");
// http.get("http://62da16fd5d893b27b2f0ebab.mockapi.io/laptop", (res) => {
//   let data = "";
//   res.on("data", (d) => {
//     data += d;
//   });
//   res.on("end", () => {
//     let jsonData = JSON.parse(data);
//     console.log(jsonData);
//   });
// });

// import axios from 'axios';

let axios = require('axios');

axios.get("http://62da16fd5d893b27b2f0ebab.mockapi.io/laptop").then((res)=>{
    console.log(res.status);
    console.log(res.data);
})