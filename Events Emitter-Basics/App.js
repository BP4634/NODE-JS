const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id) =>{

    console.log(`data received, user ${name} with id ${id}`)
})

customEmitter.on('response',() =>{

    console.log(`Some other logic here`)
})

customEmitter.on('res',() =>{

    console.log(`Different Emitter here`)
})

customEmitter.emit('response','Bryan','007')
customEmitter.emit('res')