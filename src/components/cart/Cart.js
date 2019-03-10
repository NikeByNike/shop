import React from "react";

import * as cartActions from "../../actions/cartActions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartOutline, Close } from "mdi-material-ui";
import { IconButton } from "@material-ui/core";

import "./cart.css";

function MediaCard(props) {
  const { cart, products } = props.shop;
  return (
    <div className="Cart">
      <NavLink to="/">
        <CartOutline />
        {cart.length > 0 ? <span>{cart.length}</span> : null}
      </NavLink>
      <div>
        {cart.length > 0 ? (
          cart.map(item => (
            <div className="cartItem">
              <div>{products.find(product => product.id === item.id).title}</div>
              <div>{item.count}</div>
              <IconButton onClick={() => props.deleteItem(item.id)} aria-label="Delete">
                <Close />
              </IconButton>
            </div>
          ))
        ) : (
          <div>Корзина пуста</div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  shop: state.shop
});

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(cartActions.deleteCartItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaCard);
