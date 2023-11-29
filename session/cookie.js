import express from "express";
import cookieParser from 'cookie-parser'
const app = express();
const port = 3001;

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie('mycookie', 'SeSAC', {maxAge: 3000})
  res.send('쿠키가 생성 되었습니다.')
});

app.get('/readcookie', (req, res) => {  
  const myCookie = req.cookies?.mycookie
  console.log(myCookie)

  res.send(`너의 쿠키는: ${myCookie}`)
})

app.listen(port, () => {
  console.log(`${port} 서버 준비....`);
});
