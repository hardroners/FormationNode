//•	creating an uninitiated buffer of 10 octets
var buf = new Buffer.alloc(10);
console.log(buf);

//•	Creating a buffer from array
var buffer = new Buffer.from([10, 20, 30, 40, 50]);
console.log(buffer)

//•	Creating a buffer from array
var buffer = new Buffer.from("TestNode", "utf-8");
console.log(buffer)
