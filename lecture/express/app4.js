import express from "express";
const app = express();
const port = 3000;



// middle ware를 통한 body 데이터 처리
// body-parser 패키지 === 빌트인 express 모듈 app.use(express.json())
app.use(express.json());



// 
app.post("/submit2", (req, res) => {
  const jsonData = req.body
  console.log(jsonData);
  res.json({ receivedData: jsonData });
});



// 
app.post("/submit", (req, res) => {
  let data = "";
  req.on("data", (body) => {
    data += body;
  });

  req.on("end", () => {
    try {
      console.log(data);
      const jsonData = JSON.parse(data);
      res.json({ receivedData: jsonData });
    } catch (err) {
      res.status(400).json({ err: "잘못된 입력값...." });
    }
  });

  // res.status(201);
  // res.end();
});

app.listen(port, () => {
  console.log(`서버가 ${port}에서 열려있습니다.`);
});
