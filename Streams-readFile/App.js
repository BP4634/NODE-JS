const {createReadStream} = require('fs')

const stream = createReadStream('./big.txt', {highWaterMark: 4000, encoding: 'utf8',})

//Default is 64kb
//Last buffer - the remainder
//HighWaterMark - controls the size

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))