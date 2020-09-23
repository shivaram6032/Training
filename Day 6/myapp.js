var fetch = require('node-fetch')
process.env['NODE_TLS_REJECT_UNAUTHORISED'] = 0
async function getApiData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let user = await response.json()
    return user
}
getApiData().then(
    res => {
        res.forEach(element => {
            if(element.userId== '1'){
                console.log(element)
            }
        });
    }
        ).catch(
            err => console.log(err)
        )

