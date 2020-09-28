const os = require('os')

console.log("Total Memory", os.totalmem())
console.log("Free Memory", os.freemem())
console.log("Home directory", os.homedir())
console.log("Host name", os.hostname())
console.log("Platform", os.platform())
console.log("Release", os.release())
console.log("Temp dir", os.tmpdir())
console.log("Type", os.type())