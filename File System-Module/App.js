const { readFileSync, writeFileSync } = require('fs')
const { readFile, writeFile } = require('fs')

const first = readFileSync('./text1.txt','utf8')
const second = readFileSync('./text2.txt','latin1')

writeFileSync('./result-sync-text.txt',`Here is the result: ${first} ${second} `,{flag: 'a'})

readFile('./text3.txt','utf8',(err, result) => {
    if(err){
        console.log(err)
        return
    }
    const third = result
    readFile('./text4.txt','utf8',(err, result) => {
        if(err){
            console.log(err)
            return
        }
        const fourth = result
        writeFile('result-async-text.txt',`Here is the result: ${third} ${fourth} `,{flag: 'a'},(err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('result')

        })
})

})

