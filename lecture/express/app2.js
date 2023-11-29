import express from "express";

const app = express();
const port = 3000;

// routing
// GET
app.get("/", (req, res) => {
  res.send(`Hello world!! \n GET received`);
});

// POST
app.post("/", (req, res) => {
  res.send(`Hello world!! \n POST received`);
});

// PUT
app.put("/", (req, res) => {
  res.send(`Hello world!! \n PUT received`);
});

// DELETE
app.delete("/", (req, res) => {
  res.send(`Hello world!! \n DELETE received`);
});

app.listen(port, () => {
  console.log(`서버가 ${port}에서 실행 중입니다.`);
});