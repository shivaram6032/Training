function camelcase(){
    a = "We are all learning"
    c = [a.slice(0, 2), a.charAt(3).toUpperCase(), a.slice(4, 6), a.charAt(7).toUpperCase(), a.slice(8, 10), a.charAt(11).toUpperCase(), a.slice(12)].join('')
    var b = a.charAt(3, 7, 11).toUpperCase()
    console.log(c)
}
camelcase()
