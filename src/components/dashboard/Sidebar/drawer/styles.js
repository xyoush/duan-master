const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    width: " 100%",
    display: "inherit",
    alignItems: "inherit",
    justifyContent: "inherit",
  },
  drawerOpen: {
    maxWidth: "100%",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    maxWidth: "100%",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 44,
    },
  },
  /* chỉnh chữ ở bên thanh menu dọc */
  text: {
    marginLeft: "30px",
    color: "rgb(0 0 0 / 87%)",
    display: "inline-block",
    "&:hover": {},
  },
  drawerPaper: {
    width: 280,
    maxWidth: 280,
    zIndex: 99,
    height: "100%",
    position: "relative",
  },
  menuLink: {
    textDecoration: "none",
    fontColor: "#b366ff",
  },
  listItem: {
    marginRight: '10px',
  },
  listIcon: {
 
  },
  /* khi click vào nút thì màu sẽ giữ ở ngoài */
  menuLinkActive: {
    "&>div": {
      backgroundColor: "#33b8ff",
    },
    color: "white",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 4),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    /* em = 0,25px, spacing = giá trị * 8 */
    marginLeft: "10px",
    paddingLeft: `calc(2em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  /* này dùng để cho logo tròn cái borderRadius */
  imageslogo: {
    backgroundColor: "#f3f3f3",
    borderRadius: "4em",
    width: "45px",
    height: "45px",
    marginLeft: "-10px",
    marginTop: "-5px",
  },
 

  editbutton: {
    marginLeft: "14px",
  },
  /* large này là chỉnh hình tròn trong avatar nhân viên */
  large: {
    width: "80px",
    height: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "25px",
  },
  /* chỉnh vị trí tên nhân viên */
  nameuser: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
  },
  /* chỉnh vị trí công việc nhân viên */
  namework: {
    fontSize: "13px",
    marginTop: "-12px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  /* none này đc dùng khi vào trang dashboard sẽ tự mở sẵn chứ ko đóng */
  none: {
    display: "none",
  },
  /* Iconbutton này dùng chỉnh logo dài */
  Iconbutton: {
    marginLeft: "2px",
    marginTop: "-14px",
  },
});

export default styles;
