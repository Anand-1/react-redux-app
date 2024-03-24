import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Products from "./features/products/Products";
import { CartLink } from "./features/cart/CartLink";
import { Home } from "./Home";
import { Cart } from "./features/cart/Cart";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.app}>
          <header className={styles.header}>
            <nav>
              <Link className={styles.navLink} to="/">
                Home
              </Link>
              <Link className={styles.navLink} to="/products">
                Products
              </Link>
              <CartLink />
            </nav>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
