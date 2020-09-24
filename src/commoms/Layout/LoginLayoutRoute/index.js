import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

class LoginLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      />
    );
  }
}

LoginLayoutRoute.propTypes = {
  component : PropTypes.object,
};

export default LoginLayoutRoute;
