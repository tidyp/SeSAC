import http from "http";
import fs from "fs/promises";

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile(`./others/server.html`);
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf8",
      });
      res.end(data);
    } catch (err) {
      console.log(err)
      res.writeHead(500, {
        "Content-Type": "text/plain; charset=utf8",
      })
      res.end(err)
    }
  })

  .listen(8001, () => {
    console.log(`8000번 포트가 열렸습니다.`);
  });