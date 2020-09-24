import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import TextField from "@material-ui/core/TextField";
import {
  Avatar,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
} from "@material-ui/core";
import clsx from "clsx";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
const classes = styles;

class Quanlycongviec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChucVu: [
        {
          label: "Nhân viên kế toán",
        },
        {
          label: "Nhân viên bảo vệ",
        },
        {
          label: "Nhân viên ",
        },
      ],
      GioiTinh: [
        {
          label: "Nam",
        },
        {
          label: "Nữ",
        },
      ],
      PhongBan: [
        {
          label: "Phòng tài chính",
        },
        {
          label: "Phòng nhân sự",
        },
        {
          label: "Phòng ban ",
        },
      ],
      showPassword: false,
    };
  }

  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    console.log(showPassword);
    this.setState({
      showPassword: !showPassword,
    });
  };

  // handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  renderlistlabelChucVu = () => {
    const { ChucVu } = this.state;
    let xhtml = null;
    xhtml = ChucVu.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };
  renderlistlabelPhongBan = () => {
    const { PhongBan } = this.state;
    let xhtml = null;
    xhtml = PhongBan.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };
  renderlistlabelGioiTinh = () => {
    const { GioiTinh } = this.state;
    let xhtml = null;
    xhtml = GioiTinh.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    const { showPassword } = this.state;

    return (
      <div className={classes.root}>
  
          <Card className={classes.card}>
            <Paper className={classes.media}>
              <AccountBoxIcon
                className={classes.icon}
                color="primary"
                style={{ fontSize: 55 }}
              />
            </Paper>

            <CardContent>
              <Typography gutterBottom component="h2">
                Quản lý hồ sơ
              </Typography>

              <form className={classes.form} noValidate autoComplete="off">
                <div>
                  <TextField
                    id="hovaten"
                    label="Họ và Tên"
                    defaultValue="Nguyễn Thị Thái Hà"
                    type="text"
                  />
                  <TextField id="msnv" label="MSNV" defaultValue="MG123123" />
                  <TextField
                    id="date"
                    label="Ngày sinh"
                    type="date"
                    defaultValue="2020-11-16"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    className={classes.text12}
                    select
                    id="standard-select-currency-native"
                    name="list"
                    label="Giới tính"
                    onChange={this.onChange}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {this.renderlistlabelGioiTinh()}
                  </TextField>
                </div>
                <TextField
                  className={classes.text12}
                  select
                  id="standard-select-currency-native"
                  name="list"
                  label="Chức vụ"
                  onChange={this.onChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {this.renderlistlabelChucVu()}
                </TextField>
                <TextField
                  className={classes.text12}
                  select
                  id="standard-select-currency-native"
                  name="list"
                  label="Phòng ban"
                  onChange={this.onChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {this.renderlistlabelPhongBan()}
                </TextField>
                
                <TextField
                  id="sdt"
                  label="Điện thoại"
                  defaultValue="0124828382"
                />
                <TextField
                  id="diachi"
                  label="Địa chỉ"
                  defaultValue="27-Nguyễn Tất Thành-BMT"
                />
                <TextField
                  id="email"
                  label="Email"
                  defaultValue="HaOsin@gmail.com"
                />
                <FormControl
                  className={clsx(classes.margin, classes.textField1)}
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Mật khẩu
                  </InputLabel>
                  <Input
                    name="pass"
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={this.handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </form>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                CẬP NHẬT
              </Button>
            </CardActions>
          </Card>
     

      </div>
    );
  }
}

Quanlycongviec.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlycongviec);
