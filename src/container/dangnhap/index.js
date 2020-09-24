import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { AccountCircle, Lock } from "@material-ui/icons";
import clsx from "clsx";
import React, { Component } from "react";
import styles from "./styles";

class dangnhap extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <div className={classes.login}>
          {/* <Grid item xs={12}>
            <img
              src="https://i.imgur.com/zkO97SN.png"
              alt="logo"
              className={classes.image}
            />
          </Grid> */}
          <div className={classes.cardavt}>
            <img
              src="https://i.imgur.com/zkO97SN.png"
              alt="logo"
              className={classes.image}
            />
          </div>
          <Card className={classes.card}>
            <div className={classes.root}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CardContent>
                    <form className={classes.form} autoComplete="off">
                      <div className={clsx(classes.editInput)}>
                        <label className={classes.set}>Tài Khoản</label>
                        <TextField
                          id="username"
                          type="email"
                          required
                          fullWidth
                          placeholder="Nhập Tài Khoản..."
                          InputProps={{
                            className: classes.user,
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <label className={classes.set}>Mật Khẩu</label>
                        <TextField
                          classes={{
                            text: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                          id="password"
                          required
                          fullWidth
                          type="password"
                          placeholder="Nhập Mật Khẩu..."
                          InputProps={{
                            className: classes.pass,
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          Đăng Nhập
                        </Button>
                        <a href="/#" className={classes.a}>
                          <Typography className={classes.Fpass}>
                            Quên Mật Khẩu
                          </Typography>
                        </a>
                      </div>
                    </form>
                  </CardContent>
                </Grid>
              </Grid>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(dangnhap);
