var ans= 0
for (var i=1; i<=10; i++) {
    if (i<=5) {
        ans = ans+ i
    }
}
console.log(ans)
document.getElementById("block").innerHTML=ans

function myAlert(){
    // debugger
    var confi = confirm("Do you want to delete?")
    console.log(confi)
    if (confi == true) {
        setTimeout (function() {
        alert("Delete successful")
        }, 3000)
    }
    else {
        open("https://www.google.com")
    }
}

function setSec(){
    var myDate = new Date()
    document.getElementById("block").innerHTML =myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds() 
}

// setInterval(function(){
//     setSec()
    
// }, 1000);

var myarray=[1,2,3,4]

console.log(myarray[2])
console.log(myarray.length)

sum = 0;
for (var i=0; i< myarray.length; i++){
    sum+=myarray[i]
}
document.getElementById("block").innerHTML=sum

var emp = new Array();
emp [0] = "Shiv"
emp [1]= "Ram"

function pushData() {
    emp.push ("Manu")
    printdata()

}

function popData(){
    emp.pop()
    printdata()
}

function printdata(){
    for (var i= 0; i < emp.length; i++)
    console.log(emp[i])
}
// for (var i=0; i< emp.length; i++){
//     document.write('<br>' + emp[i] + '<br>')
// }