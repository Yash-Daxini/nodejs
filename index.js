// console.log("Node js");
let a = 10
let b = 20

if(a > b){
    console.log(a)
}
else if(a == b){
    console.log(a + " " + b)
}
else{
    console.log(b);
}

const os = require("os");

console.log(os.type());
console.log(os.platform());

const Person = {
    name:"abc",
    age:10,
    isAlive:true
}

// module.exports = Person;

exports.Person = Person;