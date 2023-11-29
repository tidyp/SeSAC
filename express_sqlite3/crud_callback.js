import sqlite3 from "sqlite3";

const db = new sqlite3.Database("mydb2.db");

// 테이블 생성
db.run(
  `CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  email TEXT
  )`,
  (err) => {
    if (err) {
      console.log("생성 실패", err);
      return;
    }

    // 데이터삽입
    const newUser = { username: "jung", email: "jung@gmail.com" };
    db.run(
      `INSERT INTO users (username, email) VALUES(?, ?)`,
      [newUser.username, newUser.email],
      // (err) => {
      //   if (err) {
      //     console.err("데이터 삽입 실패");
      //     return;
      //   }
      //   console.log("데이터 삽입 성공: ", this.lastID);
      // }
      function (err) {
        if (err) {
          console.error("데이터 삽입 실패");
          return;
        }
        console.log("데이터 삽입 성공: ", this.lastID);
        // 데이터 수정
        const updateUser = {
          id: 1,
          username: "park",
          email: "park@gmail.com",
        };
        db.run(
          "UPDATE users SET username=?, email=? WHERE id=?",
          [updateUser.username, updateUser.email, updateUser.id],
          (err) => {
            if (err) {
              console.error("수정 실패", err);
              return;
            }
            console.log("수정 성공");
            // 데이터 삭제
            const delUser = {
              id: 8,
            };
            db.run("DELETE FROM users WHERE id=?", [delUser.id], (err) => {
              if (err) {
                console.error("삭제 실패", err);
                return;
              }
              console.log("삭제 성공");
              // 데이터 조회
              db.each(`SELECT * FROM users`, (err, row) => {
                if (err) {
                  console.error("쿼리실패");
                  return;
                }
                console.log("ALL users: ", row);
              });
              console.log("조회 성공");
            });
          }
        );
      }
    );
  }
);
// db연결 종료
db.close();
