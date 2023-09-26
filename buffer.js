// const buf = Buffer.from("Hi");

const buf = Buffer.alloc(4);

buf.write("Hiii")

console.log(buf);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);

buf[1] = 110;
console.log(buf.toString());
