import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const { key, name, price, seller, quantity } = props.item;
  const { handleIncrease, handleDecrease } = props;

  return (
    <div className={classes.itemContainer}>
      <h4 className={classes.name}>{name}</h4>
      <p className={classes.price}>${price}</p>
      <div className={classes.actionsContainer}>
        <p>X{quantity}</p>
        <div className={classes.actions}>
          <button
            className={classes.increase}
            onClick={() => handleIncrease(key)}
          >
            +
          </button>
          <button
            className={classes.decrease}
            onClick={() => handleDecrease(key)}
          >
            -
          </button>
        </div>
      </div>
      <h5 className={classes.seller}>Seller: {seller}</h5>
    </div>
  );
};

export default CartItem;
