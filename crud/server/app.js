import express from "express";
const app = express();
const port = 3333;

// JSON => FS
let users = [
  {
    id: 1700058864876,
    name: "aaaaa",
    age: 2222,
  },
  {
    id: 1700058857575,
    name: "bbbbb",
    age: 3343,
  },
  {
    id: 1700058123456,
    name: "ccccc",
    age: 2357,
  },
];

// json parse
app.use(express.json());

// PAGE
// 가상경로, 상대경로
app.use("/", express.static("../client/mainPage"));
app.use("/about", express.static("../client/aboutPage"));
app.use("/test", express.static("../client/testPage"));
app.use("/cal", express.static("../client/calPage"));

// SRC
app.use("/public", express.static("../public"));
// app.use("/images", express.static("../public/images"));
// app.use("/css", express.static("../public/css"));

// 가상경로, 절대경로
// app.use('/about', express.static("c:/tidyp/sesac/crud/client"));

app.get("/", (req, res) => {
  res.send(``);
});

app.get("/about", (req, res) => {
  res.send(``);
});
app.get("/test", (req, res) => {
  res.send(``);
});

app.get("/cal", (req, res) => {
  res.send(``);
});

// API: GET
app.get("/api/user", (req, res) => {
  res.json(users);
});

// API: POST
app.post("/api/user", (req, res) => {
  // 객체 삽입
  console.log(req.body);
  users.push(req.body);
  res.status(201).send('등록성공')
});

// API: PUT
app.put("/api/user/:id", (req, res) => {
  // 요청 body
  // console.log(`request body id: ${req.body.id}`)
  // console.log(`request body name: ${req.body.name}`)
  const uid = req.body.id;
  const uname = req.body.name;

  users.forEach((user) => {
    if (user.id === +uid) {
      user.name = uname;
    }
  });
  
});

// API: DELETE
app.delete("/api/user/:id", (req, res) => {
  const uid = req.params.id;
  users = users.filter((item) => item.id !== +uid);

  res.status(204).send('삭제성공')
});

app.listen(port, () => {
  console.log(`${port}번 포트 실행중...`);
});
