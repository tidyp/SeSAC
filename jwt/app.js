import express from "express";
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken";

const app = express();
const port = 3000;
const secretKey = "mySecret";


app.use(cookieParser());

app.use((req, res, next) => {
  // 클라이언트에게 JWT 생성 및 전송
  const clientId = "MyClientId-1234"; // 클라이언트 고유 식별자
  const token = jsonwebtoken.sign({ clientId }, secretKey, { expiresIn: "1m" });
  console.log(token);
  res.cookie("jwt", token, { maxAge: 60000, httpOnly: true });
  next();
});

app.get("/", (req, res) => {
  console.log("루트 접속");
  res.send("hello");
});


// verify가 없으면 위변조가능성
app.get("/decode1", (req, res) => {
  const token = req.cookies.jwt;
  const decodedToken = jsonwebtoken.decode(token, { complete: true });
  if(!decodedToken){
    return res.json({message: 'Unautorized'});
  }
  res.json({decodedToken});
});



app.get("/decode2", (req, res) => {
  const token = req.cookies.jwt;
  const decodedToken = jsonwebtoken.verify(token, secretKey);
  res.json({ decodedToken });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
