/*
Async and await are built on promises
*/

const func = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('😂');
        }, 1000);
    })
}

async function msg(callback){
    const message = await func();
    console.log(message);
    callback();
}


const f1 = ()=> console.log("After");
msg(f1);

// f1()