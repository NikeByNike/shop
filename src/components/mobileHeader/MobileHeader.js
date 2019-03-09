import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Menu, AccountOutline, CartOutline } from 'mdi-material-ui';

import * as menuActions from "../../actions/menuActions";
import Sidebar from '../sidebar/Sidebar';

import "./mobileHeader.css";
import logo from '../../assets/media/logo-200x200_140x.png';

class MobileHeader extends Component {
  state = {
    isOpenSidebar: false
  };

  handleSidebar = () => {
    this.setState((prevState) => ({
      isOpenSidebar: !prevState.isOpenSidebar
    }))
  };

  render() {
    const { nav } = this.props.menu;
    const { isOpenSidebar } = this.state;

    return (
      <>
        <Sidebar
          handleSidebar={() => this.handleSidebar()}
          open={isOpenSidebar}
        />
        <div className="mobileHeader">
          <div className="mainHeader">
            <div className="Burger">
              <button onClick={() => this.handleSidebar()}>
                <Menu/>
              </button>
            </div>
            <div className="navigate">
              <img src={logo} alt="logo"/>
            </div>
            <div className="Account">
              <NavLink to="/"><AccountOutline/></NavLink>
              <NavLink to="/"><CartOutline/></NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
});

const mapDispatchToProps = dispatch => ({
  handleSidebar: () => dispatch(menuActions.handleSidebar()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MobileHeader);
