import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv/config";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let randomcode;
app.post("/code", (req, res) => {
  const usercode = req.body.code;
  console.log(randomcode, usercode);
  if (+randomcode === +usercode) {
    res.json({
      message: `회원가입이 완료되었습니다.`,
    });
  } else {
    res.json({
      message: `코드가 일치하지 않습니다..`,
    });
  }
});

app.post("/mail", (req, res) => {
  const usermail = req.body.email;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.naver.com",
    // port: 465,
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWD,
    },
  });

  randomcode = Math.trunc(Math.random() * 1000000);
  console.log(randomcode);

  const mailOPtions = {
    from: process.env.GMAIL_EMAIL,
    to: usermail,
    subject: "회원 가입 인증 코드",
    text: `인증 코드: ${randomcode}`,
  };

  transporter.sendMail(mailOPtions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("이메일 전송 성공:", info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`서버 실행 ${port}....`);
});
