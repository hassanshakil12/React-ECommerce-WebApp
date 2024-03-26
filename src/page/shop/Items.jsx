import React, { useContext } from "react";
import css from "./shop.module.css";
import { ShopContext } from "../../store/shop-context";

const items = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <>
      <div className={css.item}>
        <div className={css.image}>
          <img src={image} />
        </div>
        <h2>{name}</h2>
        <p>${price}</p>
        <button onClick={() => addToCart(id)}>
          Add to Cart {cartItemCount > 0 && <>({cartItemCount})</>}
        </button>
      </div>
    </>
  );
};

export default items;
