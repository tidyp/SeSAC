import sqlite3 from "sqlite3";

// 메모리에 저장, 재시작하면 초기화
const db = new sqlite3.Database(":memory:");

// 원자성이 보장됨.
db.serialize(() => {
  db.run("CREATE TABLE products(id INT, name TEXT)");
  db.run("INSERT INTO products VALUES (?, ?)", [1, "product1"]);
  db.run("INSERT INTO products VALUES (?, ?)", [2, "product2"]);
  db.all("SELECT * FROM products", (err, rows) => {
    console.log('결과 출력', rows);
  });
});

db.close();
