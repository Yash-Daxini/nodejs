import axios  from "axios";

axios.get("http://62da16fd5d893b27b2f0ebab.mockapi.io/laptop").then((res)=>{
    console.log(res.status);
    console.log(res.data);
})