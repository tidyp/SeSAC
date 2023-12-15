import nodemailer from "nodemailer";
import dotenv from "dotenv/config";

const transporter = nodemailer.createTransport({
  host: "smtp.naver.com",
  port: 465,
  auth: {
    user: process.env.NAVER_EMAIL,
    pass: process.env.NAVER_PASSWD,
  },
});

const mailOPtions = {
  from: "tidyp1030@naver.com",
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
