const f1 = () => console.log("Function f1");

const f2 = () => console.log("Function f2");

const fun = () =>{
    console.log("Function fun");
    setTimeout(() => {
        f1();
    }, 1000);
    f2();
}

fun();

/*
Event loop : Any function that making delay in the execution will execute at the end of the application.


Here callstack has functions like this: fun , f1 ,f2
Above callstack for simple code without settimeout
For settimeout code callstack will be like this: fun settimeout f2 f1
*/