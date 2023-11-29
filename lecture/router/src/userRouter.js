import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("사용자 간단 프로필");
});

router.get("/profile", (req, res) => {
  res.send("사용자  프로필");
});
router.get("/settings", (req, res) => {
  res.send("사용자 설정");
});

export default router;
