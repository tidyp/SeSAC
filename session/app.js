import express from "express";
import session from "express-session";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static("./views"));
app.use("/login", express.static("./views"));
// app.use("/profile", express.static("./views/profile.html"));
// app.use("/logout", express.static("./views/logout.html"));

// 세션 미들웨어 설정
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3000,
    },
  })
);

const users = [
  { id: 0, username: "a", password: "a" },
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("세션 삭제 오류:", err);
      res.status(500).json({ message: "로그아웃 실패" });
    } else {
      res.json({ message: "로그아웃 성공!" });
    }
  });
});

app.post("/login", (req, res) => {
  // res.send("index.html");

  // console.log(req.body);
  const { username, password } = req.body;
  // console.log(username, password);

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  // console.log(user);
  if (user) {
    req.session.user = user;
    res.status(200).json({ message: "로그인 성공" });
  } else {
    console.log("로그인실패");
    res.status(401).json({ message: "로그인 실패" });
  }
});

app.get("/profile", (req, res) => {
  const user = req.session.user;
  console.log(user);
  if (user) {
    res.json({ username: user.username, message: "프로필 정보" });
  } else {
    res.status(401).json({ message: "로그인이 필요합니다." });
  }
});

app.get("/checkLogin", (req, res) => {
  // console.log(`req.session.user: ${req.session.user}`)
  const user = req.session.user;
  // console.log(`checkLogin: ${user}`);
  // console.log(`user.username ${user.username}`)
  if (user.username) {
    res.json({ username: user.username });
  } else {
    res.status(401).json({ message: "인증되지 않은 사용자입니다." });
  }
});

app.listen(port, () => {
  console.log(`서버가 ${port}에서 대기중...`);
});
