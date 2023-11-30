import sqlite from "better-sqlite3";

const db = sqlite("mydb.db");

db.exec(`CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  email TEXT
  )`);

// 데이터 삽입
const newUser = { username: "park", email: "park@gmail.com" };
// const insert = db.prepare(`INSERT INTO users (message) VALUES(?)`);
// const resInsert = insert.run(msg1);
const addData = db
  .prepare(`INSERT INTO users (username, email) VALUES(?, ?)`)
  .run(newUser.username, newUser.email);
console.log("데이터 추가 성공", addData.lastInsertRowid);

// 데이터 삭제
const id = 1;
const rmData = db.prepare(`DELETE FROM users WHERE id=?`).run(id); // run: 반환값이 없는 경우
console.log("데이터 삭제 성공", rmData);

// 데이터 조회: all
const readData = db.prepare(`SELECT * FROM users`).all();
readData.forEach((row) => {
  console.log("모든 사용자 조회", row);
});

// 데이터 조회: 단일
const userid = 3;
const readOneData = db.prepare(`SELECT * FROM users WHERE id=?`).get(userid); // get: 반환값이 있는 경우
console.log("단일 사용자 조회", readOneData);

// 데이터 수정
const updateUser = {
  username: "jung",
  email: "jung@gmail.com",
  id: 6,
};
const updateData = db
  .prepare(`UPDATE users SET username=?, email=? WHERE id=?`)
  .run(updateUser.username, updateUser.email, updateUser.id);
console.log("업데이트 성공", updateData);

db.close();
