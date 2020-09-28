function cap(){
    var a = "This is an apple."
    var c = a.toUpperCase()
    var b = [a.slice(0,5), a.charAt(5).toUpperCase(), a.slice(6, 8), a.charAt(8).toUpperCase(), a.slice(9, 11), a.charAt(11).toUpperCase(), a.slice(12)].join('')
    console.log(b)
}
cap()