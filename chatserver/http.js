import http from 'http'

const server = http.createServer()

server.on('request', () => { 
  console.log('요청이 왔습니다.')
 })
server.on('connection', () => { 
  console.log('요청이 왔습니다.')
 })
server.on('close', () => { 
  console.log('요청이 왔습니다.')
 })

 console.log('the start')
 server.listen(3000)
 console.log('the end')