var events = require('events');
var eventEmitter = new events.EventEmitter();

var sample = function f1(){
    console.log("Hi Welcome")
}
eventEmitter.on('sampleEx', sample)
eventEmitter.emit('sampleEx')