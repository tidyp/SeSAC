import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Express앱", message: "EJS를 처음 사용" });
});

app.get("/greeting", (req, res) => {
  const username = "박준하";
  res.render("greeting", { username: username });
});

app.get("/welcome", (req, res) => {
  const isAdmin = false;
  res.render("welcome", { isAdmin: isAdmin });
});

app.get("/fruits", (req, res) => {
  const fruits = ['Apple', 'Banan', 'Orange', 'Grapes']
  res.render("fruits", { fruits: fruits });
});

app.listen(port, () => {
  console.log(`서버 ${port} 레디...`);
});
