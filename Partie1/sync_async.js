const fs = require("fs");
fs.readFile("/file.md", (err, data) => {
    if (err) throw err; 
   console.log(data);
});


const fs = require("fs");
const data = fs.readFileSync("/file.md"); 
console.log(data);

var http = require('http');