var express = require('express')
var app = express()
var bodyParser = require('body-Parser')

app.use(bodyParser.json())

var student = []
app.get('/student', function(req, res){
    res.send(student)
})
app.post('/student', function(req, res){
    student.push(req.body)
    res.send("Done")
})
app.put('/student', function(req, res){
    console.log(req.body)
    student.forEach(result=>{
        if (result.id == req.body.id){
            result.name = req.body.name
        }
        
    })
    res.send(req.params.id)
})

app.listen(3500)