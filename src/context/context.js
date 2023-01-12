import React, { useContext, useReducer, useState } from "react";
import Reducer from "./reducer";
import cartData from "../utils/cartData";

const CartContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartData,
  totalQuantity: 4,
  total: 0,
  quantity: 1,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
