import React from "react";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import Provider from "react-redux";
import store from "./store";
class App extends React.Component {
  componentWillMount() {
    if (localStorage.getItem("cartItems")) {
      //when u refresh the page the already added items shouldn't get removed
      //thts y fetching thm from local storage
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      }); //to convert value to JS from string
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Ecommerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <Filter
                size={this.state.size}
                sort={this.state.sort}
                handleChangeSize={this.handleChangeSize}
                handleChangeSort={this.handleChangeSort}
                count={this.state.filteredProducts.length}
              />
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
              />
            </div>
            <div className="col-md-4">
              <Basket
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
