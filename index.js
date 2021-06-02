const Logger = require('./logger')

const mylogger = new Logger()

mylogger.on('message', (data) => console.log('Called Listener:', data))

mylogger.log('Hello world')