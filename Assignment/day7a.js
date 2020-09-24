let p1 = new Promise((resolve, reject)=>{
    resolve("First one")
})
let p2 = new Promise((resolve, reject)=>{
    resolve("Second one")
})
let p3 = new Promise((resolve, reject)=>{
    resolve("Third one")
})

Promise.all([p1, p2, p3]).then((messages)=>{
    console.log(messages)
}).catch((message)=>{
    console.log("Nothing dude")
})