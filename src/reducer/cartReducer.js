import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  ADD_TO_CART
} from "../actions/types";

const initialState = {
  items: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        items: action.payload.cartItems
      };
    case REMOVE_FROM_CART:
      return {
        items: action.payload.cartItems
      };
    default:
      return state;
  }
}
