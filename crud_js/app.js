import http from "http";
import fs from "fs/promises";
import querystring from "querystring";
const parse = querystring.parse;

let users = [
  {
    id: 1700058864876,
    name: "aaaaa",
    age: 2222,
  },
  {
    id: 1700058857575,
    name: "bbbbb",
    age: 3343,
  },
  {
    id: 1700058123456,
    name: "ccccc",
    age: 2357,
  },
];

const SUCCESS = 200;
const SERVER_ERROR = 500;
const NOT_FOUND = 404;

// HTML PAGE

const server = http.createServer(async (req, res) => {
  const urlEL = [...req.url.split("/")];
  console.log(urlEL);
  // 웹페이지요청: static, api가 아닌경우
  // - GET: localhost:3000/static/html
  if (
    !req.url.includes("static") &&
    !req.url.includes("api") &&
    !req.url.includes("ico")
  ) {
    if (urlEL[1] === "") {
      const data = await fs.readFile("./server/static/html/index.html");
      res.writeHead(SUCCESS, {
        "Content-Type": "text/html; charset=utf8",
      });
      res.end(data);
      // page
    } else {
      const data = await fs.readFile(`./server/static/html/${urlEL[1]}.html`);
      res.writeHead(SUCCESS, {
        "Content-Type": "text/html; charset=utf8",
      });
      res.end(data);
    }
  }

  // 파일요청: static
  // - GET: localhost:3000/static/html
  // - GET: localhost:3000/static/css
  // - GET: localhost:3000/static/moduels
  // - GET: localhost:3000/static/data
  if (urlEL[1] === "static") {
    // request 폴더명, 파일명 저장
    const [, , folderName, fileName] = [...req.url.split("/")];

    // request Content-Type 저장
    const typeName = req.headers.accept;

    // 파일요청 경로
    if (req.url.startsWith(`/static/${folderName}/`)) {
      const data = await fs.readFile(
        `./server/static/${folderName}/${fileName}`
      );
      res.writeHead(SUCCESS, {
        "Content-Type": `${typeName}`,
      });
      res.end(data);
    } else {
      res.writeHead(NOT_FOUND, {
        "Content-Type": "text/plain; charset=utf8",
      });
      res.end(`NOT_FOUND 페이지 없음.`);
    }
  }
  // CRUD: api
  if (urlEL[1] === "api") {
    console.log(req.method, req.url);
    // - GET: localhost:3000/api/user
    if (req.method === "GET" && req.url.startsWith("/api/user")) {
      res.writeHead(SUCCESS, {
        "Content-Type": "application/json; charset=utf8",
      });
      res.end(JSON.stringify(users));
      console.log(req.method, req.url);
      // - POST: localhost:3000/api/user/id
    } else if (req.method === "POST" && req.url.startsWith("/api/user")) {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        // const formData = parse(body);
        const formData = JSON.parse(body);
        users.push(formData);
      });
      res.writeHead(201, {
        "Content-Type": "text/plain; charset=utf8",
      });
      res.end("등록성공");
      // - PUT: localhost:3000/api/user/id
    } else if (req.method === "PUT" && req.url.startsWith("/api/user")) {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        // const formData = parse(body);
        const formData = JSON.parse(body);
        console.log(formData);
        console.log(formData.id);
        console.log(formData.name);

        // users.push(formData);
        users.forEach((el) => {
          console.log(el.id === +formData.id)
          if (el.id === +formData.id) {
            el.name = formData.name;
          }
          console.log(el.name, formData.name)
        });
      });
      res.writeHead(201, {
        "Content-Type": "text/plain; charset=utf8",
      });
      res.end("수정성공");

      console.log(body);
      // - DELETE: localhost:3000/api/user/id
    } else if (req.method === "DELETE" && req.url.startsWith("/api/user")) {
      const delid = urlEL[3];
      console.log(delid);
      users = users.filter((item) => item.id !== +delid);
      console.log(users);

      res.writeHead(201, {
        "Content-Type": "text/plain; charset=utf8",
      });
      res.end("삭제성공");
    }
  }
});

const port = 3001;

server.listen(port, () => {
  console.log(`${port}번 포트 열려있음...`);
});
