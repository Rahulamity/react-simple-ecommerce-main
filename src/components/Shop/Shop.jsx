import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
// eslint-disable-next-line no-unused-vars
import { addToCart, getItemFromLocalStorage } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import classes from "./Shop.module.scss";

const Shop = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const [displayProducts, setDisplayProducts] = useState([]);

  const handleCart = (product) => {
    setCart([...cart, product]);
    addToCart(product);
  };

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(filteredProducts || []);
  };

  return (
    <>
      <div className={classes.searchContainer}>
        <input
          placeholder="Search Products"
          type="text"
          onChange={handleSearch}
        />
      </div>
      <div className={classes.shopContainer}>
        <div className={classes.productContainer}>
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleCart={handleCart}
            ></Product>
          ))}
        </div>
        <div className={classes.cartContainer}>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
