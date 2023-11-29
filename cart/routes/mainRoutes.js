import express from "express";
const router = express.Router();

const products = [
  { id: 1, image: "/image1.jpg", name: "Product 1", price: 2000 },
  { id: 2, image: "/image2.jpg", name: "Product 2", price: 3000 },
  { id: 3, image: "/image3.jpg", name: "Product 3", price: 8000 },
  { id: 4, image: "/image4.jpg", name: "Product 4", price: 7000 },
  { id: 5, image: "/image5.jpg", name: "Product 5", price: 6000 },
  { id: 6, image: "/image6.jpg", name: "Product 6", price: 1000 },
];

router.get("/", (req, res, next) => {
  const isLogin = req.session.user;
  res.render("index", {
    isLogin: isLogin,
  });
});
router.get("/product", (req, res, next) => {
  const isLogin = req.session.user;
  res.render("product", {
    isLogin: isLogin,
    products: products,
  });
});

router.get("/mycart", (req, res, next) => {
  const isLogin = req.session.user;
  const mycart = req.session.cart || []
  const emptyCart = req.session.cart // length
  const total = mycart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  console.log(total)
  console.log(mycart)
  res.render("mycart", {
    isLogin: isLogin,
    mycart: mycart,
    emptyCart,
    total
  });
});
router.get("/login", (req, res, next) => {
  const isLogin = req.session.user;
  res.render("login", {
    isLogin: isLogin,
  });
});

export default router;
