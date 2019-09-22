import React from "react";
import util from "../util";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
class Basket extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>You have {cartItems.length} products in the basket.</div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map(item => (
                <li>
                  <b>{item.title}</b>X {item.count}={item.price * item.count}
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      this.props.removeFromCart(this.props.cartItems, product)
                    }
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            Total:
            {util.formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
            {/* c is the current item */}
          </div>
        )}
        <button
          onClick={() => alert("Todo: Implement checkout page.")}
          className="btn btn-primary"
        >
          checkout
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cartItems: state.cart.items
});
export default connect(
  mapStateToProps,
  { removeFromCart }
)(Basket);
