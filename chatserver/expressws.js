import express from "express";
import WebSocket, { WebSocketServer } from "ws";
import path from "path";
const rootDir = path.resolve();

const port = 8080;
const expressPort = 3000;

const wss = new WebSocketServer({ port: port });

const app = express();

app.get("/", (req, res) => {
  console.log(path.join(rootDir, "clienttest.html"));
  const filename = path.join(rootDir, "clienttest.html");
  res.sendFile(filename);
});

// 웹소켓: 연결 대기
wss.on("listening", () => {
  console.log(`${port} 포트 웹소켓 대기 중`);
});

// 웹소켓: 처리
wss.on("connection", (ws, req) => {
  console.log(req.socket)
  const clientIp = req.socket.remoteAddress;
  console.log(`클라이언트가 접속하였습니다: `, clientIp);

  // 연결된 이후 내부 메시지 처리
  ws.on("message", (message) => {
    console.log(message.toString());
    let text = message.toString();

    // 받은 문자열 파싱
    const parseMessage = JSON.parse(message);
    console.log(parseMessage);
    console.log(clientIp, parseMessage);

    // 모든 클라이언트에게 그대로 재전송
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        // client.send("메세지를 잘받았습니다.");
        // client.send(text);
        // client.send(parseMessage.content);
        const messageType = client === ws ? "sent" : "received";
        const MessageObj = { type: messageType, content: parseMessage.content };

        client.send(JSON.stringify(MessageObj));
      }
    });
  });

  // 연결된 이후 연결 종료 처리
  ws.on("close", () => {});
});

app.listen(expressPort, () => {
  console.log(`익스프레스 서버가 준비중...${expressPort}`);
});

console.log(`웹소켓 서버 시작`);
