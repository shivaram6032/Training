function fun1(){
    console.log("Fun1 is called.")
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Function 1")
        },1000)
    })
}
function fun2(){
    console.log("Fun2 is called.")
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Function 2")
        },2000)
    })
}
async function sequentialFun(){
    console.log("Started Sequential Fun")
    const f1 = await fun1()
    console.log(f1)
    const f2 = await fun2()
    console.log(f2)
}
async function concurrentFun(){
    console.log("Started Concurrent Fun")
    const f1 = fun1()
    const f2 = fun2()
    console.log(await f2)
    console.log(await f1)
}
concurrentFun()