import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actions/cartActions";
function Cart() {
  const states = useSelector((state: any) => state.numOfItems);
  console.log(states);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart">
        <h2>Number of items in Cart:{states}</h2>
        <button className="green" onClick={() => addItem()}>
          Add Item to Cart
        </button>
        <button
          disabled={states.numOfItems > 0 ? false : true}
          className="red"
          onClick={() => {
            dispatch(deleteItem());
          }}
        >
          Remove Item from Cart
        </button>
      </div>
    </>
  );
}

export default Cart;
