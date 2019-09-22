import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
const initialState = {};
if (localStorage.getItem("cartItems")) {
  initialState.cart = { items: JSON.parse(localStorage.getItem("cartItems")) };
  //parse is used to convert string to JS object
}
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; //to add redux dev tools
export default createStore(rootReducer, initialState, applyMiddleware(thunk));
