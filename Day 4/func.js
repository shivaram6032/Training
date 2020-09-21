function fun1() {
    return "hi"
}

console.log(fun1())

function fun2(param1, param2) {
    a = "hi "
    return a + " " + param1 + " " + param2
}
var employee = {firstname : "Manu", contact: {home:'xyz', phone:'123'}}
let company = [
    {firstname: 'Manu', contact: 100},
    {firstname: 'raghu', contact: '101'},
    {firstname: 'Shiv', contact: '102'}
]

console.log(company[1])

company.map(x=>{
    x.contact+=10
})
var x=company.splice(0,1)
console.log('Removed Object', x)
