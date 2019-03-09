import React, { Component } from "react";
import { Switch, withRouter } from "react-router-dom";
import { Route } from 'react-router';

import Main from '../../conteiners/main/Main';

class Content extends Component {

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
          />
          <Route
            path="/about"
            component={Main}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(Content);
