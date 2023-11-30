import database from "./final_db.js";

const newUser1 = { username: "lee", email: "lee@gmail.com" };
const newUser2 = { username: "park", email: "park@gmail.com" };
const newUser3 = { username: "jung", email: "jung@gmail.com" };
const newUser4 = { username: "kim", email: "kim@gmail.com" };
const newUser5 = { username: "choi", email: "choi@gmail.com" };
const newUser6 = { username: "choi", email: "choi@gmail.com" };
const changeUser = {
  id: 1,
  username: "leeeeeee",
  email: "leeeeeee@icloud.com",
};
const removeUser = {
  id: 6,
};

// db 연결
const db = new database("mydb.db");

const main = async () => {
  await db.createTable();
  await db.insertUser(newUser1);
  await db.insertUser(newUser2);
  await db.insertUser(newUser3);
  await db.insertUser(newUser4);
  await db.insertUser(newUser5);
  await db.insertUser(newUser6);
  await db.insertUser2('qwdqwdq', 'dqwdqwdqw@gmail.com');
  await db.updateUser(changeUser);
  await db.delUser(removeUser);
  await db.readUser();
  await db.closeDB();
};

main();
