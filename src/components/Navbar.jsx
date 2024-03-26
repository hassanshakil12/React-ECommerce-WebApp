import React from "react";
import css from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={css.container}>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Navbar;
