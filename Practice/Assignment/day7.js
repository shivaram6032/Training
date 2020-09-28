let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 3){
        resolve("Success")
    } else{
        reject("Failed")
    }
})

p.then((message) => {
    console.log("This is in the then part, " + message)
}).catch((message) => {
    console.log("This is in the catch part, " + message)
})
// The promis function is similar to the callback function,replace Promise with 
// just function name and (resolve, reject) with (callback,error) rest same.
// also no need then and catch for callback.