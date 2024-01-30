import express from "express";
import cors from "cors";
import path from "path";
const rootDir = path.resolve();

const app = express();
const port = 3000;

app.use(express.static(path.join(rootDir, "..", "client", "dist")));

// app.use(cors());
const corsOptions = {
  origin: ["http://localhost:5173"],
};

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

app.get("/", (req, res) => {
  const htmlFilePath = path.join(rootDir, "..", "client", "dist");
  console.log(htmlFilePath);
  res.sendFile(htmlFilePath, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("서버 오류");
    }
  });
});

app.get("/api/post", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`${port} 서버 실행중...`);
});
