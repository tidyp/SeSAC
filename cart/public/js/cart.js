// cart 상품추가
const addProduct = (productId) => {
  fetch(`/api/product/${productId}`, { method: "POST" })
    .then((res) => res.json())
    .then((data) => alert(data.message));
  window.location.reload();
};

// cart 상품제거
const delBtn = (productId) => {
  fetch(`/api/product/${productId}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => alert(data.message));
  window.location.reload();
};


// cart 수량증가
const increaseItemBtn = (productId) => {
  fetch(`/api/cart/increase/${productId}`, { method: "put" })
    .then((res) => res.json())
    .then((data) => alert(data.message));
  window.location.reload();
};

// cart 수량감소
const decreaseItemBtn = (productId) => {
  fetch(`/api/cart/decrease/${productId}`, { method: "put" })
    .then((res) => res.json())
    .then((data) => alert(data.message));
  window.location.reload();
};


