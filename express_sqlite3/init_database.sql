-- 사용자 테이블 생성
CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT
);

-- 초기 사용자 추가
INSERT INTO users(username, password) VALUES
  ('user1', 'password1'),
  ('user2', 'password3');

  -- 상품 테이블 생성
CREATE TABLE IF NOT EXISTS products(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cate TEXT,
  price INTEGER
);

-- 상품 테이블 추가
INSERT INTO products(name, cate, price) VALUES
  ('product1', 'books', 3000),
  ('product2', 'cups', 4000),
  ('product3', 'books', 9000);