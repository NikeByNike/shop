import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Input } from "@material-ui/core";
import {
  Facebook,
  Pinterest,
  Instagram,
  Magnify,
  AccountOutline,
} from "mdi-material-ui";

import "./header.css";
import logo from "../../assets/media/logo-200x200_140x.png";
import Cart from '../cart/Cart';

class Header extends Component {
  render() {
    const { nav } = this.props.menu;

    return (
      <>
        <div className="header">
          <div className="contacts">
            <div>Контакты</div>
            <div>+7(960)630-79-66</div>
            <div>workwithme@rambler.ru</div>
            <div className="spacer" />
            <div className="socials">
              <NavLink to="/">
                <Facebook />
              </NavLink>
              <NavLink to="/">
                <Pinterest />
              </NavLink>
              <NavLink to="/">
                <Instagram />
              </NavLink>
            </div>
          </div>
          <div className="mainHeader">
            <div className="Search">
              <Magnify />
              <Input />
            </div>
            <div className="navigate">
              <img src={logo} alt="logo" />
            </div>
            <div className="Account">
              <NavLink to="/">
                <AccountOutline />
              </NavLink>
              <Cart/>
            </div>
          </div>
        </div>
        <div className="navigate">
          <ul>
            {nav.map(item => (
              <li>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
  shop: state.shop
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
