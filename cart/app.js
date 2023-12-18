import express from "express";
import session from "express-session";

import path from "path";
const rootDir = path.resolve();

import mainRoutes from "./routes/mainRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = 3000;

// template engine
app.set("view engine", "ejs");

// static file
app.use(express.static(path.join(rootDir, "public", "js"))); // js
app.use(express.static(path.join(rootDir, "public", "css"))); // css
app.use(express.static(path.join(rootDir, "public", "src", "images"))); // images


// middleware
import checkLoginMW from "./middlewares/authMiddleware.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "abc1234",
    resave: false,
    saveUninitialized: true,
  })
);

// routes
app.use("/", mainRoutes);
// app.use("/mycart", checkLoginMW, testRoutes); // middleware
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`${port} 실행 중...`);
});


'/api/auth/login'
'/api/map/login'
'/api/product/login'