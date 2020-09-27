import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
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
class Quanlycongviec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: "2",
    };
  }

  listAdd = [
    {
      label: "Thiết kế giao diện đăng nhập",
      name: "Mai Ngọc Dương",
      date: date,
      decription:
        "Đăng nhập (login) là một thủ tục khi bắt đầu tham gia vào một trang web nào đó có mục đăng ký " +
        "thành viên. Người muốn đăng nhập phải theo trình tự hướng dẫn để nhập tên thường dùng ID và " +
        "mật khẩu (password).",
    },
    {
      label: "Thiết kế giao diện đăng kí",
      name: "Hồ Đình An",
      date: date,
      decription:
        "Đăng ký một tên người dùng là tùy chọn, nhưng được khuyến khích. Bạn không cần phải cung cấp " +
        "tên thật hay bất kỳ thông tin cá nhân nào của bạn để đăng ký.",
    },
    {
      label: "Thiết kế giao diện quản lý công việc",
      name: "Chu Đức Mạnh",
      date: date,
      decription:
        "Kế hoạch là một tập hợp những hoạt động, công việc được sắp xếp theo trình tự nhất định để đạt" +
        "được mục tiêu đã đề ra. Lập kế hoạch là chức năng đầu tiên trong bốn chức năng của quản lý là" +
        "lập kế hoạch, tổ chức, lãnh đạo và kiểm tra. Lập kế hoạch là chức năng rất quan trọng đối " +
        "với mỗi nhà quản lý bởi vì nó gắn liền với việc lựa chọn mục tiêu và chương trình hành động " +
        "trong tương lai Kế hoạch, điều thách thức lớn với hầu hết các nhà quản lý, đặc biệt là với " +
        "các doanh nghiệp",
    },
    {
      label: "Thiết kế giao diện hồ sơ",
      name: "Nguyễn Khánh Hoàng",
      date: date,
      decription:
        "Hồ sơ ứng tuyển (còn có tên thông dụng trong ngôn ngữ phương Tây hay CV) là một tập văn bản tài " +
        " liệu tóm tắt về bản thân, quá trình được giáo dục, đào tạo và liệt kê các kinh nghiệm làm việc " +
        " dùng để xin việc làm",
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
              <MenuOutlinedIcon className={classes.icon} />
            </Paper>
            <CardHeader title="Kế Hoạch công việc" />
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
                className={classes.title1}
                color="textSecondary"
                gutterBottom
              >
                Người thực hiện : {list.name}
              </Typography>
              <Typography
                variant="h1"
                className={classes.title2}
                color="textSecondary"
                gutterBottom
              >
                Thời Gian : {list.date}
              </Typography>
              {`Mô tả công việc :`}
              <LinesEllipsis
                text={list.decription}
                maxLine={line}
                trimRight
                basedOn="letters"
              ></LinesEllipsis>
              <Button
                className={classes.LinesEllipsis}
                onClick={this.showChiTiet}
              >
                Xem Chi Tiết
              </Button>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<AddIcon>send</AddIcon>}
            >
              Thêm
            </Button>
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

Quanlycongviec.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlycongviec);
