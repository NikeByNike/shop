import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import Main from '../../conteiners/main/Main';
import About from '../../conteiners/about/About';

class Content extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={ props => <Main {...props}/>}
          />
          <Route
            exact
            path="/about"
            render={ props => <About {...props}/>}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(Content);
