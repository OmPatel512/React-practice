var http = require("http");
var a = 10;
var b = 40;
var c = a + b;

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("Hello World <br>");
    res.write(`A value is ${a} and B value is ${b} Sum is ${c} `);
    res.end("Bye");


}).listen(3000);
console.log("Server is running on port http://localhost:3000/");