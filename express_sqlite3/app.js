import express, { json } from "express";
import sqlite3 from "sqlite3";
import fs from "fs";

const app = express();

const port = 3000;
const dbFile = "mydb.db";

const db = new sqlite3.Database(":memory:");

// route
app.get("/:table", (req, res) => {
  const db_table = req.params.table;
  const query = `SELECT * FROM ${db_table}`;
  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

app.get("/:table/:column/:keyword", (req, res) => {
  const { table, column, keyword } = req.params;
  const query = `SELECT * FROM ${table} WHERE ${column} = ?`;

  db.get(query, [keyword], (err, row) => {
    if (err) {
      console.error(err);
    } else {
      res.json(row);
    }
  });
});


// db 초기화 함수
const init_database = () => {
  return new Promise((resolve, reject) => {
    const sql = fs.readFileSync("init_database.sql", "utf8");
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
const runServer = () => {
  app.listen(port, () => {
    console.log(`${port}실행 중...`);
  });
};

const main = async () => {
  await init_database();
  await runServer();
};
main()



