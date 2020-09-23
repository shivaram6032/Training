var ev = require('events');
var em = new ev.EventEmitter();
var myString = "Welcome to JavaScript"
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function SumOfArray() {
    var sum = 0
    numArray.forEach (x => sum += x)
    console.log(sum)
}
var odd = function odd(){
    var odd = numArray.filter(x=> x%2 !==0)
    console.log(odd)
}
var even = function even(){
    var even = numArray.filter(x=> x%2 ==0)
    console.log(even)
}
var findLength = function len(){
    console.log(myString.length)
}
var strreplace = () => {
    console.log("before replace", myString)
    console.log(myString.replace('JavaScript', 'nodejs'))
}
em.on("number Functions", SumOfArray)
em.addListener("number Functions", odd)
em.addListener("number Functions", even)
em.emit("number Functions")

em.on("string Functions", findLength)
em.addListener("string Functions", strreplace)
em.emit("string Functions")
