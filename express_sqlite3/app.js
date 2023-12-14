import express, { json } from "express";
import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";
const rootDir = path.resolve();

const app = express();

const port = 3000;
const dbFile = "mydb.db";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = new sqlite3.Database(":memory:");
// const db = new sqlite3.Database(dbFile);

// GET: users
app.get("/users", (req, res) => {
  const { username, password } = req.query;
  let query = "";
  if (!username) {
    query = `SELECT * FROM users`;
  } else {
    query = `SELECT * FROM users WHERE username='${username}'`;
    // query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
  }
  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

app.get("/users/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  const query = `SELECT * FROM users WHERE id=${user_id}`;
  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

// GET: products
app.get("/products", (req, res) => {
  const { name, price, cate } = req.query;
  const buildQuery = () => {
    let query = `SELECT * FROM products`;
    const conditions = [];

    if (name) {
      conditions.push(`name LIKE '%${name}%'`);
    }
    if (price) {
      conditions.push(`price = '${price}'`);
    }
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(" AND ")}`;
    }
    console.log(query);
    db.all(query, (err, rows) => {
      res.json(rows);
    });
  };
  buildQuery();
});

app.get("/products/:products_id", (req, res) => {
  const products_id = req.params.products_id;
  const query = `SELECT * FROM users WHERE id=${products_id}`;
  db.all(query, (err, rows) => {
    res.json(rows);
  });
});
// ------------------------------------------------------------------------------------------------
app.post("/users", (req, res) => {
  const { username, password } = req.body
  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  db.run(query, [username, password]);

  res.send('생성완료')
});
app.put("/users", () => {});
app.delete("/users", () => {});
// ------------------------------------------------------------------------------------------------

// db 초기화 함수
const init_database = () => {
  return new Promise((resolve, reject) => {
    const sql = fs.readFileSync(
      path.join(rootDir, "init_database.sql"),
      "utf8"
    );
    db.exec(sql, (err) => {
      if (err) {
        reject(err);
        console.log("초기화 실패", err);
      } else {
        resolve();
        console.log("초기화 성공");
      }
    });
  });
};

// 서버실행
const runServer = async () => {
  await init_database();
  app.listen(port, () => {
    console.log(`${port}실행 중...`);
  });
};

runServer();
