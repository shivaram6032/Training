var express = require('express')
var app = express()
var bodyParser = require('body-Parser')

app.use(bodyParser.json())

app.post('/setData', function(req, res){
    console.log(req.body)
    res.send(req.body)
})
app.listen(3500)