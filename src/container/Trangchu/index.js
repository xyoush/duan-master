import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Drawer,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import ListIcon from '@material-ui/icons/List';
import AddIcon from "@material-ui/icons/Add";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import PropTypes from "prop-types";
import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import styles from "./styles";

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
console.log(date);
class Trangchu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: "2",
    };
  }

  listAdd = [
    {
      label: "Thiết kế website thương mại shop thời trang",
      name: "Mai Ngọc Dương, " + <br/> +"Chu Đức Mạnh, " + "Hồ Đình An",
      date: date,
      
    },
  ];

  showChiTiet = () => {
    this.setState({
      line: (this.state.line === '2' ? '100' : '2'),
    });
  };

  renderAdd = () => {
    let xhtml = null;
    const { classes } = this.props;
    const { line } = this.state;
    
    xhtml = this.listAdd.map((list, index) => {
      return (
        <Grid item xs={6} key={index}>
          <Card className={classes.card}>
            <Paper className={classes.paper}>
              <ListIcon className={classes.icon} />
            </Paper>
            <CardHeader title="Dự án đang làm" />
            <Divider />
            <CardContent className={classes.CardContent}>
              <Typography
                variant="h1"
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Công việc : {list.label}
              </Typography>
              
              <Typography
                variant="h1"
                className={classes.title2}
                color="textSecondary"
                gutterBottom
              >
                Thời Gian : {list.date}
              </Typography>
              <Typography
                variant="h1"
                className={classes.title1}
                color="textSecondary"
                gutterBottom
              >
                Người đảm nhận : {list.name}
              </Typography>
       
              <LinesEllipsis
                text={list.decription}
                maxLine={line}
                trimRight
                basedOn="letters"
              ></LinesEllipsis>
            </CardContent>
          </Card>
        </Grid>
      );
    });
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          {this.renderAdd()}
        </Grid>
      </div>
    );
  }
}

Trangchu.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Trangchu);
