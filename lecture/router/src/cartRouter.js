import express from "express";
const router = express.Router();

// route chain
router
  .route("/")
  .get((req, res) => {
    res.send("장바구니 조회");
  })
  .post((req, res) => {
    res.send("장바구니 담기");
  })
  .put((req, res) => {
    res.send("장바구니 수정");
  })
  .delete((req, res) => {
    res.send("장바구니 삭제");
  })

export default router;
