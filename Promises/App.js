const {readFile, writeFile} = require('fs').promises

//const getText = (path) => {

  //return new Promise((resolve, reject) => {

    //readFile(path, 'utf8', (err,       data) => {
     // if (err) {
      // reject(err)
  //} else {
      //  resolve(data)
      //  }
//})
   // })
 // }


const start = async () => {
  try {
 const first = await readFile('./text.txt')
   console.log(first)
    await writeFile('./textResult.txt', `THIS IS AWESOME! ${first}`)
}
  
catch(err) {
  console.log('Oh no', err)
}
  }


start()


 // .then((data) => console.log(data))
 // .catch((err) => console.log(err))

  