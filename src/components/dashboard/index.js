import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as uiActions from "./../../actions/ui";
import Appbar from "./Sidebar/appbar";
import Drawer from "./Sidebar/drawer/index";
import styles from "./styles";
import cn from 'classnames';

class Dashboard extends Component {
  handleToggleSide = (value) => {
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };

  render() {
    const { children, name, classes, showSidebar } = this.props;
    return (
      <div>
        <div className={classes.dashboard}>
          <Appbar name={name} showSidebar={showSidebar} ontoggleSidebar={this.handleToggleSide}/>
          <div className={classes.wrapper}>
            <Drawer
              showSidebar={showSidebar}
              ontoggleSidebar={this.handleToggleSide}
            />
            <div className={cn(classes.wrapperContent,{
              [classes.shiftLeft] : showSidebar === false,
            })}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapToProps = (state) => {
  return {
    showSidebar: state.ui.showSidebar,
    hideSidebar: state.ui.hideSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
