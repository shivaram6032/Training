const http = require('http')
http.createServer(function(req,res){
    res.write("Welcome to HTTP server")
    res.end()
}).listen(8080)