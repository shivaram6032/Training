async function dummy(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('success!')            
        },2000)
    })
    let result = await promise
    return result
}
dummy().then(res=>{
    console.log(res)
}).catch(err=>console.log(err))