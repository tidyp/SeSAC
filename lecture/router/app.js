import express from "express";
const app = express();
const port = 3000;

import userRouter from "./src/userRouter.js";
import productRouter from "./src/productRouter.js";
import cartRouter from "./src/cartRouter.js";

// router
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("Welcome to mainPage");
});

app.listen(port, () => {
  console.log(`${port} 열림`);
});
