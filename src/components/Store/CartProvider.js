import { useReducer } from "react";
import CartContext from "./CartContext";
const defaultcartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingcartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingcartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingcartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === "DELETE_ITEM") {
    const existingcartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingcartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };
      updatedItems = [...state.items];
      updatedItems[existingcartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === "CLEAR") {
    return defaultcartState;
  }

  return defaultcartState;
};
const CartProvider = (props) => {
  const [cartState, cartdispatchFunction] = useReducer(
    cartReducer,
    defaultcartState
  );

  const addItemtoCartHandler = (item) => {
    cartdispatchFunction({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    cartdispatchFunction({ type: "DELETE_ITEM", id: id });
  };

  const clearCartHandler = () => {
    cartdispatchFunction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
