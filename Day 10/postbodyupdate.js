var express = require('express')
var app = express()
var bodyParser = require('body-Parser')

app.use(bodyParser.json())

var student = []
app.get('/getData', function(req, res){
    res.send(student)
})
app.post('/setData', function(req, res){
    student.push(req.body)
    res.send("Done")
})
app.listen(3500)