var fetch = require('node-fetch')
process.env['NODE_TLS_REJECT_UNAUTHORISED'] = 0
async function getApiData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    let user = await response.json()
    return user
}
getApiData().then(
    res => {
        console.log(res.filter(r=> r.email = 'Nikita@garfield.biz'))
    }
        ).catch(
            err => console.log(err)
        )
getApiData()