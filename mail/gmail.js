import nodemailer from "nodemailer";
import dotenv from "dotenv/config";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: "smtp.naver.com",
  // port: 465,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWD,
  },
});

const mailOPtions = {
  from: process.env.GMAIL_EMAIL,
  to: "tidyp1030@icloud.com",
  subject: "테스트 이메일",
  text: "안녕하세요..............",
};

transporter.sendMail(mailOPtions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("이메일 전송 성공:", info.response);
  }
});
