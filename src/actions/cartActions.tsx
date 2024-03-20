import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actioTypes";

const addItem = () => {
  console.log("a");
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export { addItem, deleteItem };
