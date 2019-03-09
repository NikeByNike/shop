import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import "./sidebar.css";

class Sidebar extends Component {

  render() {
    const { open } = this.props;
    const { nav } = this.props.menu;

    return (
      <>
        <div className={open ? 'sidebar open' : 'sidebar'}>
          <ul>
            {nav.map(item => (
              <li>
                <NavLink to={item.link}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => this.props.handleSidebar()}
          className={open ? 'backdrop open' : 'backdrop'}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar);
