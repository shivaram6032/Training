let p = new Promise((resolve, reject)=>{
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
    var len = Object.keys(student).length
    resolve(len)        
})
p.then((message)=>{
    console.log("This is the length " + message)
})