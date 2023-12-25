import React from "react";
import classes from "./Cart.module.scss";
import { Link } from "react-router-dom";

// Reusable Price Component
const Price = ({ value }) => <h4>Total Price: {value.toFixed(2)}</h4>;

// Reusable Checkout Button Component
const CheckoutButton = () => (
  <button className={classes.checkout}>
    <Link to="/review-order">Checkout</Link>
  </button>
);

const Cart = (props) => {
  const { cart } = props;

  const cartPriceReducer = (prev, product) => prev + product.price;
  const total = cart.reduce(cartPriceReducer, 0);

  return (
    <div className={classes.cartContainer}>
      <h3 className={classes.title}>Order Summary</h3>
      <h4>Item Ordered: {cart.length}</h4>

      {/* Reusable Price Component */}
      <Price value={total} />

      {/* Reusable Checkout Button Component */}
      <CheckoutButton />
    </div>
  );
};

export default Cart;

