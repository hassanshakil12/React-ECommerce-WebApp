import React, { useContext } from "react";
import css from "./cart.module.css";
import { ShopContext } from "../../store/shop-context";

const CartItems = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className={css.cartItem}>
      <img src={image} alt="" />
      <div className={css.description}>
        <h3>{name}</h3>
        <p>${price}</p>
        <div className={css.countHandler}>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
