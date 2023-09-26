// const http = require("http");

const axios = require("axios");

const data = ({
        LaptopName: 'ASUS ROG Strix SCAR 15 By Node',
        LaptopModel: 'Strix SCAR 15',
        LaptopMaker: 'Asus ROG',
        LaptopPrice: '2,81,999.00',
        LaptopDescription: 'Intel Core i9 12th Gen (15.6 inch, 32GB, 1TB, Windows 11, MS Office, NVIDIA GeForce RTX 3080Ti Graphics, WQHD IPS ',
        LaptopImage: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663346421/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250324_0_jhrxzn.png/mxw_2048,s_webp,f_auto'
})

// let req = http.request("http://62da16fd5d893b27b2f0ebab.mockapi.io/laptop",{
//     method:"POST",
//     header:{
//         'Content-Type':'application/json'
//     }
// },(res)=>{
//     let body = "";
//     console.log('StatusCode', res.statusCode);

//     res.on("data",(d)=>{
//         body += d;
//     })
//     res.on("end",()=>{
//         console.log("Body = ",body);
//     })
// })

// req.write(data);

axios.post("http://62da16fd5d893b27b2f0ebab.mockapi.io/laptop",data).then((res)=>{
    console.log(res.status);
    console.log('res.data', JSON.stringify(res.data))
}).catch((err)=>{
    console.log('err', err)
})