import express from "express";
import nunjucks from "nunjucks";
import fs from "fs";
import csv from "csv-parser";
// import path from 'path'
// const __dirname = path.resolve();

const app = express();
const port = 3000;

nunjucks.configure("views", {
  express: app,
});

app.set("view engine", "html");

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const end = Date.now();
    const duration = end - start;
    console.log(`요청-응답시간: ${duration}`);
  });
  next();
});

app.use("/views", express.static("./views"));

// read file
const header = [];
const data = [];
const loadDataIntoMemory = async () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream("./user.csv", "utf8")
      .pipe(csv())
      .on("headers", (row) => {
        // row.map(el => header.push(el))
        header.push(...row);
      })
      .on("data", (row) => {
        // console.log(row.slice(10))
        data.push(row);
        // console.log(data)
      })
      .on("end", () => {
        console.log("파일 다 읽음");
        resolve();
      })
      .on("error", (err) => {
        console.log(`파일 읽기 오류 ${err}`);
        resolve(err);
      });
  });
};



app.get("/user/:Id", (req, res) => {
  // console.log(req.params.Id)
  const userID = req.params.Id;
  const userIndex = data.filter(el => el.Id === userID)[0]
  // console.log(userIndex);

  res.render(`info.html`, {
    header: header,
    userIndex: userIndex
  });
});

app.get("/search", (req,res) => { 
  const name = req.query.name
  // console.log(name)
  const userSearch = data.filter(el => el.Name.includes(name))
  // console.log(userSearch)
  
  res.render(`index.html`, {
    header: header,
    data: userSearch,
    name
  });
 })

const startServer = async () => {
  await loadDataIntoMemory();
  app.get("/", (req, res) => {
    // console.log(header);
    const page = req.query.page || 1;

    const itemsPerPage = 50;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const curPageRows = data.slice(startIndex, endIndex);
    const totalPage = Math.ceil(data.length / itemsPerPage);

    // console.log(`전체 페이지수: ${totalPage}`);
    // console.log(`${page}, ${startIndex} ${endIndex}`);

    res.render(`index.html`, {
      header: header,
      data: curPageRows,
      totalPages: totalPage,
      page: +page,
    });
  });

  app.listen(port, () => {
    console.log(`${port}서s버 실행 중 ...`);
  });
};

startServer();
