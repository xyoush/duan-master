import { Avatar, withStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Assignment } from "@material-ui/icons";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SettingsIcon from "@material-ui/icons/Settings";
import WorkIcon from "@material-ui/icons/Work";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTES } from "../../../../constants";
import styles from "./styles";

class Sidebar extends Component {

  Drawer = (value) =>{
    const { ontoggleSidebar} = this.props;
    if(ontoggleSidebar){
      ontoggleSidebar(value);
    }
  }

  renderList() {
    const {classes} = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List className={classes.List}>
            {ADMIN_ROUTES.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  exact={item.exact}
                  className={classes.menuLink}
                  activeClassName={classes.menuLinkActive}
                  key={item.path}
                >
                  <ListItem button key={item} className={classes.listItem}>
                    <ListItemIcon className={classes.listIcon}>
                      {index === 0 && <WorkIcon color="primary" />}
                      {index === 1 && <AssignmentIndIcon color="primary" />}
                      {index === 2 && <Assignment color="primary" />}
                      <ListItemText
                        primary={item.name}
                        className={classes.text}
                      />
                    </ListItemIcon>
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
          <Divider />
          <List>
            {["Cài Đặt"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 1 === 0 ? <SettingsIcon color="primary" /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { classes,showSidebar } = this.props;
    return (
      <div >
        <Drawer
          className={clsx(classes.drawerPaper, {
            [classes.drawerOpen]: showSidebar,
            [classes.drawerClose]: !showSidebar,
          })}
          classes={{
            paper: classes.drawerPaper,
          }}
          open={showSidebar}
          onClose={() => this.toggleDrawer(false)}
          variant="persistent"
        >
          <Avatar
            alt="Nguyễn Thị Thái Hà"
            src="https://i.imgur.com/up7EERp.jpg"
            className={showSidebar === true ? classes.large : classes.none}
          />
          <p className={showSidebar === true ? classes.nameuser : classes.none}>
            Nguyễn Thị Thái Hà
          </p>
          <p className={showSidebar === true ? classes.namework : classes.none}>
            Ô sin
          </p>
          <Divider />
        {this.renderList()}
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
  showSidebar : PropTypes.bool,
};

export default withStyles(styles)(Sidebar);
