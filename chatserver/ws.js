import WebSocket, { WebSocketServer } from "ws";

const port = 8080;

const wss = new WebSocketServer({ port: port });

// 웹소켓: 연결 대기
wss.on("listening", () => {
  console.log(`${port} 포트 웹소켓 대기 중`);
});

// 웹소켓: 처리
wss.on("connection", (ws, req) => {
  const clientIp = req.socket.remoteAddress;
  console.log(`클라이언트가 접속하였습니다: `, clientIp);

  // 연결된 이후 내부 메시지 처리
  ws.on("message", (message) => {
    console.log(message.toString());
    let text = message.toString()

    // 모든 클라이언트에게 그대로 재전송
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        // client.send("메세지를 잘받았습니다.");
        client.send(text);
      }
    });
  });

  // 연결된 이후 연결 종료 처리
  ws.on("close", () => {});
});

console.log(`웹소켓 서버 시작`);
