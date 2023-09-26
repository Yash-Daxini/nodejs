/* 
Promises and callbacks helps to make code asychronus

Callbacks are functions that pass as a argument to the another function

*/

const fetchAPI = (msg,callback)=>{
    setTimeout(() => {
        console.log(msg);
        callback()
    }, 1000);
}

const printResponseOfAPI = ()=>{
    console.log("Data from API");
}

fetchAPI("API called and response is comming...",printResponseOfAPI) // passed f2 as a callback function to f1

// we can also write above line like this

fetchAPI("API called and response is comming...",()=>{
    console.log("Data from API");
})


