import { useEffect, useState } from "react";
import { getItemFromLocalStorage } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const shopping_cart_ls = getItemFromLocalStorage("shopping_cart");
      if (shopping_cart_ls) {
        let cartItems = JSON.parse(shopping_cart_ls);
        let storedCartItems = [];
        for (const key in cartItems) {
          const product = products.find((product) => product.key === key);
          if (product) {
            Array(cartItems[key])
              .fill(0)
              .forEach((i) => storedCartItems.push(product)); // pushing product `quantity` times
          }
        }
        setCart(storedCartItems);
      }
    }
  }, [products]);

  return [cart, setCart];
};

export default useCart;
