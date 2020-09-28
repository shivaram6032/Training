const fs = require('fs')
fs.appendFile("asd.txt", "The appended part.", function(err){
    if (err){
        console.log("err", err)
    }
    console.log("done")
})