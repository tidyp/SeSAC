import express from "express";
import fs from "fs";
import path from "path";
const __dirname = path.resolve();
console.log(__dirname);

const app = express();
const port = 3000;

app.use(express.static("express/public"));

//
app.get("/", (req, res) => {
  res.send(`
  <html>
    <head>
      <title>이미지 로딩</title>
    </head>
    <body>
      <h1>이미지</h1>
      <img src="/images/img1.jpg"/>
    </body>
  </html>
  `);
});

//
app.get("/about", (req, res) => {
  const htmlFilePath = path.join("./", "express", "public", "index.html");
  console.log(htmlFilePath);
  fs.readFile(htmlFilePath, "utf8", (err, data) => {
    if (err) {
      console.log(`파일읽기실패: ${err}`);
      res.status(500).send("서버 오류");
      return;
    }
    res.send(data);
  });
});

//
app.get("/about2", (req, res) => {
  const htmlFilePath = `${__dirname}/express/public/index.html`;
  console.log(htmlFilePath);
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      console.log(`파일읽기실패: ${err}`);
      res.status(500).send("서버 오류");
    }
  });
});

app.listen(port, () => {
  console.log(`${port} 열림`);
});
