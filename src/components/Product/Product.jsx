import React from "react";
import classes from "./Product.module.scss";

const Product = (props) => {
  const { img, name, price, seller, stock } = props.product;
  return (
    <div className={classes.productContainer}>
      <div className={classes.image}>
        <img src={img} alt="product" />
      </div>
      <div className={classes.info}>
        <h4 className={classes.productName}>{name}</h4>
        <p>By: {seller}</p>
        <h3 className={classes.price}>${price}</h3>
        <p>Only {stock} left in stock - order soon</p>

        <button
          className={classes.addToCart}
          onClick={() => props.handleCart(props.product)}
        >
          + add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
