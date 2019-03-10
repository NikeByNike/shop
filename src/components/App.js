import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Header from '../components/header/Header';
import Content from '../components/content/Content';
import MobileHeader from '../components/mobileHeader/MobileHeader';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,700" rel="stylesheet" />
        <Header/>
        <MobileHeader/>
        <Content/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(App));
