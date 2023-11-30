import express from "express";
import session from "express-session";
import path from "path";
const rootDir = path.resolve();
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// db
const users = [
  { id: 0, username: "a", password: "a" },
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(path.join(rootDir)));

// 세션 미들웨어 설정
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000,
    },
  })
);
const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

// main
app.get("/", (req, res) => {
  // 세션
  const sessionLogin = req.session.checkLogin;

  // 쿠키
  const cookieeee = parseCookies(req.headers.cookie);
  const cookieLogin = users.find((user) => {
    user.username === cookieeee.id && user.password === cookieeee.pw;
    return (
      user.username === cookieeee.idcookie &&
      user.password === cookieeee.pwcookie
    );
  });

  // 로그인 세션 있으면 index 렌더링
  if (sessionLogin) {
    res.render("index", {
      checkLogin: sessionLogin,
    });
    // 또는 쿠키값 있으면 index 렌더링
  } else if (cookieLogin) {
    res.render("index", {
      checkLogin: cookieLogin,
    });
    // 둘다 없으면 login 리다이렉트
  } else {
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

// login----------------------------------------------------------
app.post("/login", (req, res) => {
  const { username, password, checkbox } = req.body;

  // 세션 로그인
  const checkLogin = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (checkLogin) {
    // 로그인 성공 시 세션에 저장
    req.session.checkLogin = checkLogin;

    // 로그인 성공 시 checkbox 클릭시 쿠키저장, maxage단위: 초
    if (checkbox) {
      res.setHeader("Set-Cookie", [
        `idcookie=${username}; Max-Age=15`,
        `pwcookie=${password}; Max-Age=15`,
      ]);
    }
    res.redirect("/");
  } else if (req.headers.cookie) {
    const cookies = req.headers.cookie;
    console.log(cookies);
    console.log(cookies.split(";"));
  } else {
    res.redirect("/login");
  }
});

// logout
app.post("/logout", (req, res) => {
  console.log('로그아웃')
  req.session.destroy();
  res.clearCookie("idcookie");
  res.clearCookie("pwcookie");
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`${port}서버 실행중...`);
});
