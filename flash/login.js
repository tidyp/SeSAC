import express from "express";
import session from "express-session";
import flash from "express-flash";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "user" && password === "pass") {
    req.flash("success", "Login successful");
  } else {
    req.flash(
      "error",
      "Login failed. Please check your username and password."
    );
  }

  const successMessage = req.flash("success");
  const errorMessage = req.flash("error");
  const isLogin = successMessage ?? errorMessage

  res.render("login", {
    successMessage: successMessage,
    errorMessage: errorMessage,
  });
});

app.get("/login", (req, res) => {
  const successMessage = req.flash("success");
  const errorMessage = req.flash("error");

  const resultMessage = successMessage ?? errorMessage;

  res.render("login");
});

app.listen(port, () => {
  console.log(`${port} 서버 실행 중...`);
});
