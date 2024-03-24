import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const states = useSelector((state: any) => state.numOfItems);
  console.log(states);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart">
        <h2>Number of items in Cart:{states}</h2>
        <button className="green">Add Item to Cart</button>
        <button disabled={states.numOfItems > 0 ? false : true} className="red">
          Remove Item from Cart
        </button>
      </div>
    </>
  );
}

export default Cart;
