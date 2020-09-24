import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../commoms/Theme";
import { ADMIN_ROUTES, LOGIN_ROUTES } from "./../../constants/index";
import AdminLayoutRoute from "../../commoms/Layout/AdminLayoutRoute/index";
import { BrowserRouter, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginLayoutRoute from './../../commoms/Layout/LoginLayoutRoute/index';
import { Provider } from "react-redux";
import configureStore from "./../../redux/configureStore";

const store = configureStore();

class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    });
    return xhtml;
  }

  renderLoginRoutes() {
    let xhtml = null;
    xhtml = LOGIN_ROUTES.map((oroute) =>{
      return (
        <LoginLayoutRoute
        key={oroute.path}
          path={oroute.path}
          component={oroute.component}
          name={oroute.name}
          exact={oroute.exact}
        />
      )
    });
    return xhtml;
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <Switch>{this.renderAdminRoutes()}</Switch>
          <Switch>{this.renderLoginRoutes()}</Switch>
        </ThemeProvider>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
