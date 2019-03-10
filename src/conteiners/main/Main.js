import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button } from "@material-ui/core";

import * as cartActions from "../../actions/cartActions";
import Card from '../../components/card/Card';

import "./main.css";

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
    const { products } = this.props.shop;
    return (
      <>
        <section className="cards">
          {products.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  shop: state.shop
});

const mapDispatchToProps = dispatch => ({
  setCartItem: item => dispatch(cartActions.setCartItem(item))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
