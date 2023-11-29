import express from "express";

const app = express();
const port = 3000;



app.use('/images', express.static('./express/public/images'));

// route
// ==================================================================================
app.get("/", (req, res) => {
  res.send("hello, get");
});

app.get("/about", (req, res) => {
  res.send("hello, about");
});

app.get("/user", (req, res) => {
  res.send("hello, user");
});

// route parameter, 가변변수
app.get("/user/:id", (req, res) => {
  const uid = req.params.id;
  res.send(`hello, user ${uid}`);
});

app.get("/user/:id/profile", (req, res) => {
  const uid = req.params.id;
  res.send(`
  <h1>${uid}님의: 프로파일</h1>
  <img src = "/images/img1.jpg"/>
  <img src = "/images/img2.jpg"/>
  <img src = "/images/img3.jpg"/>
  `);
});

// middle ware
// ==================================================================================
// middle ware를 통한 없는 페이지 정의
app.use((req, res) => {
  res.status(400).send("페이지를 찾을 수 없습니다.");
});



// GET Parameter는 req.query를 통해 값을 전달 받음.
// ==================================================================================
// /search?keyword=abc
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`입력한 키워드는 ${keyword}입니다.`);
});

// /shopping?cate=drink&item=beer
app.get("/shopping", (req, res) => {
  // GET Parameter는 req.query를 통해 값을 전달 받음.
  const cate = req.query.cate;
  const item = req.query.item;
  res.send(`입력한 키워드는 ${cate}, ${item}입니다.`);
});

// ==================================================================================

// server
app.listen(port, () => {
  console.log(`서버가 ${port}에서 실행 중입니다.`);
});
