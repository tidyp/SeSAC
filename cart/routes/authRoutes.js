import express from "express";
const router = express.Router();

const users = [
  { id: 0, username: "a", password: "a" },
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("세션 삭제 오류:", err);
      res.status(500).json({ message: "로그아웃 실패" });
    } else {
      res.json({ message: "로그아웃 성공!" });
    }
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    req.session.user = user;
    res.status(200).json({ message: "로그인 성공" });
    return;
  } else {
    console.log("로그인실패");
    res.status(401).json({ message: "로그인 실패" });
    return;
  }
});

router.get("/checkLogin", (req, res) => {
  const user = req.session.user;
  if (user && user.username) {
    res.json({ username: user.username });
  } else {
    res.status(401).json({ message: "인증되지 않은 사용자입니다." });
  }
});

export default router;
