const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    //BLOCKING CODE!!!
    for (let i = 0; i < 1000000000; i++) {
      for (let j = 0; j < 1000000000; j++) {
        console.log(`${i} ${j}`)
      }
    }
  
    res.end('Home Page')
  
    
  } else if(req.url === '/about'){
      res.end('About Page')
    } else {
      res.end('Error Page')
    }
  
})

server.listen(5000,() => {
  console.log('Server is running on port 5000')
