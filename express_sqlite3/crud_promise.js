import sqlite3 from "sqlite3";

// db 연결
const db = new sqlite3.Database("mydb2.db");

// 테이블 생성
const createTable = () => {
  return new Promise((resolve, reject) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT
      )`,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

// 데이터삽입
const insertUser = () => {
  const newUser = { username: "jung", email: "jung@gmail.com" };
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO users (username, email) VALUES (?, ?)`,
      [newUser.username, newUser.email],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

// 데이터수정
const updateUser = () => {
  const updateUser = {
    id: 13,
    username: "park",
    email: "park@gmail.com",
  };

  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE users SET username=?, email=? WHERE id=?",
      [updateUser.username, updateUser.email, updateUser.id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

// 데이터삭제
const delUser = () => {
  const delUser = {
    id: 8,
  };

  return new Promise((resolve, reject) => {
    db.run("DELETE FROM users WHERE id=?", [delUser.id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// 데이터조회
const readUser = () => {
  return new Promise((resolve, reject) => {
    db.each(`SELECT * FROM users`, (err, row) => {
      if (err) {
        console.error("쿼리실패");
        reject(err);
      } else {
        console.log("ALL users: ", row);
        resolve();
      }
    });
  });
};

const main = async () => {
  await createTable();
  await insertUser();
  await updateUser()
  // await delUser()
  await readUser();
  db.close();
};

main();
