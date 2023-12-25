// transaction with local storage

const getItemFromLocalStorage = (key) => localStorage.getItem(key);

const addToCart = (product) => {
  let shoppingCart = {};
  const shopping_cart_ls = getItemFromLocalStorage("shopping_cart") || false;

  if (shopping_cart_ls) {
    shoppingCart = JSON.parse(shopping_cart_ls);
    shoppingCart[product.key] = shoppingCart[product.key]
      ? shoppingCart[product.key] + 1
      : 1;
  } else {
    shoppingCart[product.key] = 1;
  }
  localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
};

const removeFromCart = (product) => {
  let shoppingCart = {};
  const shopping_cart_ls = getItemFromLocalStorage("shopping_cart") || false;

  if (shopping_cart_ls) {
    shoppingCart = JSON.parse(shopping_cart_ls);
    if (shoppingCart[product.key] > 1) {
      shoppingCart[product.key] -= 1;
    } else {
      delete shoppingCart[product.key];
    }
  }
  localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
};

export { addToCart, removeFromCart, getItemFromLocalStorage };
