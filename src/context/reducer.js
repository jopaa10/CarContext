import {
  CLEAR_CART,
  DEACREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
  TOTAL,
} from "./actions";

const Reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        totalQuantity: state.cart.length - 1,
      };

    case CLEAR_CART:
      return {
        cart: [],
        totalQuantity: 0,
      };

    case INCREASE_QUANTITY:
      let singleCartItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        quantity: (singleCartItem.quantity = action.payload.quantity + 1),
        totalQuantity: state.totalQuantity + 1,
      };

    case DEACREASE_QUANTITY:
      let singleItem = state.cart.find((item) => item.id === action.payload.id);

      if (singleItem.quantity < 1) {
        return {
          ...state,
          quantity: 0,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
          totalQuantity: state.totalQuantity - 1,
        };
      }

      return {
        ...state,
        quantity: (singleItem.quantity = action.payload.quantity - 1),
        totalQuantity: state.totalQuantity - 1,
      };

    case TOTAL:
      return {
        ...state,
        total: state.cart
          .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
          .toFixed(2),
      };

    default:
      throw new Error(`no matching ${action.type} types`);
  }
};
export default Reducer;
