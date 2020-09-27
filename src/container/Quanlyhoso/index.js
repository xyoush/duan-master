import { CardActions, CardMedia, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CardActionArea from "@material-ui/core/CardActionArea";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";


class Quanlyhoso extends Component {
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
    return (
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.gird}>
          <Grid item xs={12} sm={7}>
            <Paper className={classes.media}>
              <AccountBoxIcon
                className={classes.icon}
                style={{ fontSize: 55 }}
              />
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.Ten}>
              Quản lý hồ sơ
            </Typography>
            <CardContent>
              <form noValidate autoComplete="off" className={classes.form}>
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
                  id="email"
                  label="Email"
                  defaultValue="HaOsin@gmail.com"
                />
                <TextField
                  id="standard-password-input"
                  label="Mật Khẩu"
                  type="password"
                  defaultValue="HaOsin@gmail.com"
                  autoComplete="current-password"
                  helperText="Mật khẩu không hợp lệ"
                />
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
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Cập nhật
                </Button>
              </form>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardMedia
                  className={classes.media2}
                  image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              <CardContent className={classes.cardtext2}>
                <Typography gutterBottom component="h2" className={classes.Typo}>
                  Trần Văn Thái Hà
                </Typography>
                <Typography component="p">Nhân Viên</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Quanlyhoso.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlyhoso);
