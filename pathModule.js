const path = require("path");

let a = path.basename("/NodeL/package.json");
a = path.dirname("abc/package.json");
a = path.isAbsolute("c:/abc/package.json")
a = path.parse("c:/abc/package.json")
a = path.resolve("/package.json")

console.log('', a);