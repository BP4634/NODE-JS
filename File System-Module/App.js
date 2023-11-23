const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./text1.txt','utf8')
const second = readFileSync('./text2.txt','latin1')

writeFileSync('./result-sync-text.tex',`Here is the result: ${first} ${second} `,{flag: 'a'})

