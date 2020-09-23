var ev = require('events');
var em = new ev.EventEmitter();

var f1 =() =>{
    console.log("Fun1")
}
var f2 =() =>{
    console.log("Fun2")
    em.emit('first')
}

em.on('first', f1)
em.on('second', f2)

em.emit('second')