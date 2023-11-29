import express from "express";
const router = express.Router();

// 상품+
router.put("/increase/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const cart = req.session.cart || [];
  console.log(productId);

  const updatedCart = cart.map((cart) => {
    if (cart.id === productId) {
      cart.quantity += 1;
    }
    return cart;
  });
  console.log(cart);
  req.session.cart = updatedCart;

  res.json({
    message: `상품 수량 증가.`,
    updatedCart,
  });
});

// 상품-
router.put("/decrease/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const cart = req.session.cart || [];
  console.log(productId);

  // 선택된 제품 id 확인
  const selectItem = cart.find((cart) => cart.id === productId);
  console.log(selectItem);

  // 해당 제품 수량만 변경
  if (selectItem) {
    if (selectItem.quantity > 1) {
      selectItem.quantity -= 1;
    }
  }
  req.session.cart = cart;

  res.json({
    message: `상품 수량 감소.`,
    cart,
  });
});

export default router;
