import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import store from "./store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Cart />
      </Provider>
    </>
  );
};

export default App;
