import { useReducer, createContext } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart.js";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productInCartIndex >= 0) {
        const newState = structuredClone(cart);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      return state.filter((item) => item.id === id);
    }

    case "CLEAR_CART": {
      return initialState;
    }
  }

  return state;
};

// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const cleanCart = () => dispatch({ type: "CLEAN_CART" });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
