import express from "express";
import session from "express-session";
import flash from "express-flash";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.get("/", (req, res) => {
  req.flash("info", "welcome to my homepage");
  res.redirect("/message");
});

app.get("/message", (req, res) => {
  const m = req.flash("info")
  res.send(m);
});

app.listen(port, () => {
  console.log(`${port} 서버 실행 중...`);
});
