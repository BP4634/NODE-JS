const {writeFileSync} = require('fs')
for(let i = 0; i < 100000; i++){
    writeFileSync('./Huge.txt', `Hello World ${i}\n`, {flag: 'a'})
}