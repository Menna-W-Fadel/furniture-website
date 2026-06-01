import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(state.cartItems)
    );
  }, [state.cartItems]);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const increaseQty = (id) => {
  dispatch({ type: "INCREASE_QTY", payload: id });
};

const decreaseQty = (id) => {
  dispatch({ type: "DECREASE_QTY", payload: id });
};

const clearCart = () => {
  dispatch({ type: "CLEAR_CART" });
};

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);