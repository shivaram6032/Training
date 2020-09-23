var english =30
var maths =35
var malayalam =45

function total(callback) {
    setTimeout(() => {
        callback(english+maths+malayalam)

    },2000);    
}
function average() {
    total(function(total){
        console.log(total/3)
    })
    
}
average()