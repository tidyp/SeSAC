import sqlite3 from "sqlite3";

class Database {
  // 서버 연결
  constructor(dbName) {
    this.db = new sqlite3.Database(dbName);
  }
  // 테이블 생성
  createTable = () => {
    return new Promise((resolve, reject) => {
      this.db.run(
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
  insertUser = (newUser) => {
    return new Promise((resolve, reject) => {
      this.db.run(
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

  // 데이터삽입
  insertUser2 = (username, email) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO users (username, email) VALUES (?, ?)`,
        [username, email],
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
  updateUser = (changeUser) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE users SET username=?, email=? WHERE id=?",
        [changeUser.username, changeUser.email, changeUser.id],
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
  delUser = (removeUser) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM users WHERE id=?", [removeUser.id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };
  // 데이터조회
  readUser = () => {
    return new Promise((resolve, reject) => {
      this.db.each(`SELECT * FROM users`, (err, row) => {
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
  // 서버 종료
  closeDB = () => this.db.close();
}

export default Database;
