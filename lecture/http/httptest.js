import http from "http";
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.writable('<h1>Hellow node!</h1>')
//   res.writable('<h1>Hellow node!</h1>')
// });

// server.listen(port, "127.0.0.1", () => {
//   console.log(`${port}포트 생성완료`);
// });


// const server2 = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.writable('<h1>Hellow node!</h1>')
//   res.writable('<h1>Hellow node!</h1>')
// });

// server.listen(port, "127.0.0.1", () => {
//   console.log(`${port}포트 생성완료`);
// });

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write('<h1>Hellow node!</h1>')
  res.write('<p>Hellow node! 서버1</p>')
  res.write('<div>Hellow node! 서버2</div>')
  res.write('<span>Hellow node! 서버3</span>')
  res.write('<h3>Hellow node! 서버4</h3>')
  res.write('<p>Hellow node! 서버5</p>')
  res.write('<p>Hellow node! 서버6</p>')
  res.end('<p>fqwn;fwqnofnqwofqwn;fnqw;fn;</p>')
}).listen(3000, () => { console.log(`3000포트 생성완료`)})
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write('<h1>Hellow node!</h1>')
  res.write('<p>Hellow node!</p>')
}).listen(3001, () => { console.log(`3001포트 생성완료`)})
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write('<h1>Hellow node!</h1>')
  res.write('<p>Hellow node!</p>')
}).listen(3002, () => { console.log(`3002포트 생성완료`)})