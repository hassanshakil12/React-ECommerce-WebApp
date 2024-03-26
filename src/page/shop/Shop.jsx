import React from "react";
import css from "./shop.module.css";
import Items from "./Items";
import { PRODUCTS } from "../../products.js";

const Shop = () => {
  return (
    <div className={css.container}>
      {PRODUCTS.map((product) => (
        <Items key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Shop;
