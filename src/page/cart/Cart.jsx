import React, { useContext } from "react";
import css from "./cart.module.css";
import CartItems from "./CartItems";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../store/shop-context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className={css.cart}>
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className={css.cart}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className={css.checkout}>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            CheckOut
          </button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
