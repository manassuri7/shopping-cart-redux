import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE } from "./types";

export const fetchProducts = () => dispatch => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const filterProducts = (products, size) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
              a => a.availableSizes.indexOf(size.toUpperCase()) >= 0
            )
    }
  });
};

export const sortProducts = (products, sort) => dispatch => {
  const products = items.slice(); //to make a copy and replace the new copy with the previous 1 in state for updation
  if (sort !== "") {
    //if not empty then sorted based on the price
    products.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    //sorted based on the id
    products.sort((a, b) => (a.id < b.id ? 1 : -1));
  }
  return dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products
    }
  });
};
