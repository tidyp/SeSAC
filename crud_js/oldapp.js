import http from "http";
import fs from "fs/promises";
import querystring from "querystring";
const parse = querystring.parse;

const SUCCESS = 200;
const SERVER_ERROR = 500;
const NOT_FOUND = 404;

const users = {
  aaa: "111",
  bbb: "222",
  ccc: "333",
};

// HTML PAGE
const mainPage =  fs.readFile("./lect/http2/html/index.html");


const server = http.createServer(async (req, res) => {
  // console.log(`method: ${req.method}, url: ${req.url}`);
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        const data =  await mainPage
        res.writeHead(SUCCESS, {
          "Content-Type": "text/html; charset=utf8",
        });
        res.end(data);
      } else if (req.url === "/about") {
        const data = await fs.readFile("./lect/http2/html/about.html");
        res.writeHead(SUCCESS, {
          "Content-Type": "text/html; charset=utf8",
        });
        res.end(data);
      } else if (req.url === "/cal") {
        const data = await fs.readFile("./lect/http2/html/cal.html");
        res.writeHead(SUCCESS, {
          "Content-Type": "text/html; charset=utf8",
        });
        res.end(data);
      } else if (req.url === "/users") {
        const data = await fs.readFile("./lect/http2/html/users.html");
        res.writeHead(SUCCESS, {
          "Content-Type": "text/html; charset=utf8",
        });
        // data = data.map(el => el.replace("INPUT:USER", users))
        res.end(data);
      } else if (req.url === "/user") {
        res.writeHead(SUCCESS, {
          "Content-Type": "application/json; charset=utf8",
        });
        res.end(JSON.stringify(users));
      } else if (req.url) {
        // 요청 파일경로, 파일이름 저장
        const [, folderName, fileName] = [...req.url.split("/")];
        // 요청 파일 Content-Type 저장
        // const typeName = req.headers.accept.split(',')[0]

        const typeName = req.headers.accept;
        console.log(`path: ${folderName}/${fileName},typename: ${typeName}`);

        // 숙제2
        if (req.url.startsWith(`/${folderName}/`)) {
          // const data = await fs.readFile(`./lect/http2/${req.url}`);
          const data = await fs.readFile(
            `./lect/http2/${folderName}/${fileName}`
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

        // 숙제1
        // if (req.url.startsWith("/images/")) {
        //   const data = await fs.readFile(`./lect/http2/${req.url}`);
        //   res.writeHead(SUCCESS, {
        //     "Content-Type": `image/jpg`,
        //   });
        //   res.end(data);
        // } else if (req.url.startsWith("/css/")) {
        //   const data = await fs.readFile(`./lect/http2${req.url}`);
        //   res.writeHead(SUCCESS, {
        //     "Content-Type": `text/css`,
        //   });
        //   res.end(data);
        // }
      } else {
        res.writeHead(NOT_FOUND, {
          "Content-Type": "text/plain; charset=utf8",
        });
        res.end(`NOT_FOUND 페이지 없음.`);
      }

      // 요청 생성
    } else if (req.method === "POST") {
      // users
      if (req.url === "/user") {
        let body = "";
        req.on("data", (data) => {
          body += data;
        });

        req.on("end", () => {
          // const formData = parse(body);
          const formData = JSON.parse(body);          
          users[formData.id] = formData.name;

          console.log(users)
        });
      }

      res.writeHead(201, {
        "Content-Type": "text/plain; charset=utf8",
      });
      res.end("등록성공");``

      // 요청 수정
    } else if (req.method === "PUT") {
      if (req.url.startsWith("/api/user")) {
        const idKey = req.url.split("/")[2];
        console.log(idKey);
        let body = "";
        req.on("data", (data) => {
          body += data;
        });

        req.on("end", () => {
          const formData = parse(body);
          console.log("dqwdwqdwqdqwdqwdwqdwqd", formData.name);
          const newValue = formData.name;
          console.log("newValue", newValue);
          users[idKey] = newValue;
          console.log(users);
        });
      }

      res.writeHead(201, {
        "Content-Type": "text/plain; charset=utf8",
      });
      res.end("수정성공");

      // 요청 삭제
    } else if (req.method === "DELETE") {
      if (req.url.startsWith("/user")) {
        const idKey = req.url.split("/")[2];
        delete users[idKey];
        console.log(users);
      }

      res.writeHead(201, {
        "Content-Type": "text/plain; charset=utf8",
      });
      res.end("삭제성공");
    }
  } catch (err) {
    console.log(`에러발생 ${err} ${err.message}`);
    res.writeHead(SERVER_ERROR, {
      "Content-Type": "text/plain; charset=utf8",
    });
    res.end("서버 오류....");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`${port}번 포트 열려있음...`);
});
