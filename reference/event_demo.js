const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myem = new MyEmitter()

// Event listener
myem.on('event', () => console.log('Event fired!!!'))

// Emit an event
myem.emit('event')
myem.emit('event')
myem.emit('event')