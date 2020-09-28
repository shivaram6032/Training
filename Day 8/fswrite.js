const fs = require('fs')

fs.writeFile("asd.txt", "New to Nodejs", function (err){
    if (err){
        console.log("err")
    }
    console.log("new file created ")
})