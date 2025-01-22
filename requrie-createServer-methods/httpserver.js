const http = require("http")

// createServer() is used to   create a web server
//hello wqelcome 
var server = http.createServer((req,res) => // here res -> response from the user ,req -> request from the user
{
    res.write("Hello world ")
    res.end()
})

server.listen(3000)
console.log("server started at localhost:3000 open it")