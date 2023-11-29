import express from "express";

const router = express.Router();

// data
const products = [
  { id: 1, image: '/image1.jpg', name: "Product 1", price: 2000 },
  { id: 2, image: "/image2.jpg", name: "Product 2", price: 3000 },
  { id: 3, image: "/image3.jpg", name: "Product 3", price: 8000 },
  { id: 4, image: "/image4.jpg", name: "Product 4", price: 7000 },
  { id: 5, image: "/image5.jpg", name: "Product 5", price: 6000 },
  { id: 6, image: "/image6.jpg", name: "Product 6", price: 1000 },
];

router.post("/:productId", (req, res) => {
  const productId = +req.params.productId;
  const product = products.find((el) => el.id === +productId);
  if (!product) {
    res.status(404).json({ message: "상품을 찾을 수 없습니다." });
  }

  // 세션 로드
  const cart = req.session.cart || [];

  // 중복 상품
  console.log("중복된 상품");
  const duplicateProduct = cart.find((cartItem) => cartItem.id === product.id);

  // if (product.id === +productId) {
  if (duplicateProduct) {
    // 중복상품의 갯수만

    const updatedCart = cart.map((cart) => {
      if (cart.id === productId) {
        cart.quantity += 1;
      }
      return cart;
    });
    console.log(cart);
    req.session.cart = updatedCart;
  } else {
    // 새 상품
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    req.session.cart = cart;
  }

  res.json({
    message: `${product.id}번 상품이 장바구니에 추가되었습니다.`,
    cart,
  });
});

router.delete("/:productId", (req, res) => {
  const productId = +req.params.productId;
  const cart = req.session.cart || [];
  console.log(`${productId}, ${cart}`);

  const updatedCart = cart.filter((cart) => cart.id !== productId);
  console.log(updatedCart);

  req.session.cart = updatedCart;

  res.json({
    message: `상품이 제거되었습니다.`,
    updatedCart,
  });
});

export default router;
