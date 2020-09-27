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
import HomeIcon from '@material-ui/icons/Home';
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTES } from "../../../../constants";
import styles from "./styles";

import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import GroupIcon from '@material-ui/icons/Group';
import RateReviewIcon from '@material-ui/icons/RateReview';
import TimelineIcon from '@material-ui/icons/Timeline';
import BarChartIcon from '@material-ui/icons/BarChart';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
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
                      {index === 0 && <FeaturedPlayListIcon color="primary" />}
                      {index === 1 && <NoteAddIcon color="primary" />}
                      {index === 2 && <WorkIcon color="primary" />}
                      {index === 3 && <PermContactCalendarIcon color="primary" />}
                      {index === 4 && <GroupIcon color="primary" />}
                      {index === 5 && <RateReviewIcon color="primary" />}
                      {index === 6 && <TimelineIcon color="primary" />}
                      {index === 7 && <BarChartIcon color="primary" />}
                      {index === 8 && <LocalLibraryIcon color="primary" />}
                      {index === 9 && <WorkIcon color="primary" />}
                      {index === 10 && <PermContactCalendarIcon color="primary" />}
                      {index === 11 && <LibraryBooksIcon color="primary" />}
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
