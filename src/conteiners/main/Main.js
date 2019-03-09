import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Input, Button } from "@material-ui/core";

import * as cartActions from "../../actions/cartActions";

class Main extends Component {
  state = {
    input: ""
  };

  handleChangeInput = value => {
    this.setState({
      input: value
    });
  };

  setCartItem = () => {
    this.props.setCartItem(this.state.input);
    this.setState({
      input: ''
    });
  };

  render() {
    const { products } = this.props.cart;
    return (
      <>
        <Input
          onChange={e => this.handleChangeInput(e.target.value)}
          value={this.state.input}
        />
        <Button onClick={() => this.setCartItem()}>СОХРОНИТЬ</Button>
        {products.map(item => (
          <div>
            {item.name}
          </div>
        ))}
        <div className="firstContent">
          <p>
            <i>
              Artisaire Presents
            </i>
          </p>
          <h1><span>The Wedding Shop</span></h1>
          <p>Curated Wedding Heirlooms For The Artful Bride</p>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  setCartItem: item => dispatch(cartActions.setCartItem(item))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
