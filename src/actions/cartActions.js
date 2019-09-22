import { ADD_TO_CART } from "./types";

export const addToCart = (items, product) => dispatch => {
  const cartItems = items.slice(); //to get copy

  let productAlreadyInCart = false;
  cartItems.forEach(item => {
    if (item.id === product.id) {
      productAlreadyInCart = true;
      item.count++;
    }
    if (!productAlreadyInCart) {
      //if product not already in cart, join it by count of 1
      cartItems.push({ ...product, count: 1 });
    }
    //to save the product in localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); //to store the item in local storage inside key cartItems
    return dispatch({
      type: ADD_TO_CART,
      payload: {
        cartItems: cartItems
      }
    });
  });
};

export const removeFromCart = (items, product) => {
  const cartItems = items.slice().filter(element => element.id !== product.id);
  localStorage.setItem("cartItems", cartItems);
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      cartItems: cartItems
    }
  });
};
