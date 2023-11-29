import express from "express";

const app = express();

const port = 3000;

const myLogger = (req, res, next) => {
  const date = new Date(Date.now());
  const formattedTime = date.toLocaleString();
  console.log(`${formattedTime}: LOG MESSAGE`);
  next();
};

const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
};

// middle ware
app.use(myLogger);
app.use(requestTime);

// routing
// routing: root 경로 생성
app.get("/", (req, res) => {
  console.log(req.requestedTime)
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`서버가 ${port}에서 실행 중입니다.`);
});
