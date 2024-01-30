import express from "express";
import expressWs from "express-ws";
import WebSocket, { WebSocketServer } from "ws";
import path from "path";
const rootDir = path.resolve();

const port = 3000;

const app = express();
expressWs(app);

let wsClients = new Map()

app.get("/", (req, res) => {
  console.log(path.join(rootDir, "client.html"));
  const filename = path.join(rootDir, "client.html");
  res.sendFile(filename);
});

app.ws("/chat", (ws, req) => {
  // console.log(req.socket);
  const clientIp = req.socket.remoteAddress;
  console.log(`
  사용자가 접속하였습니다
  IP: ${clientIp}
  `);

  let parseMessage = "";
  let messageType;
  let username;

  // 연결된 이후 내부 메시지 처리
  ws.on("message", (message) => {
    console.log(message.toString());

    // 받은 문자열 파싱
    // const parseMessage = JSON.parse(message);
    try {
      parseMessage = JSON.parse(message);
      messageType = JSON.parse(message.messageType);
      username = username

      console.log(clientIp, parseMessage); // ip msg
    } catch (err) {
      console.log(err);
      return;
    }
  });

  if(username && !wsClients.has(username)){
    wsClients.set(username, ws)
  }

  wss.wsClients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      const messageType = client === ws ? "sent" : "received";
      const MessageObj = { type: messageType, content: parseMessage.content };

      client.send(JSON.stringify(MessageObj));
    }
  });



  // 연결된 이후 연결 종료 처리
  ws.on("close", () => {});
});

app.listen(port, () => {
  console.log(`${port} 서버 실행중...`);
});
