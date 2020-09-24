const styles = (theme) => ({
  // nội dung ở dưới
  root: {
    flexGrow : 1,
    display :'flex',
    marginTop :'100px',
    flexWrap: 'wrap',
  },
  card: {
    position: "relative",
    maxWidth: '100%',
    overflow: "visible",
  },
  cardImg: {
    margin: "-1px auto 50px",
    maxWidth: 300,
    marginTop: '100px',
    marginRight:'-10px',
    overflow: "visible",
  },
  // hình ảnh
  media: {
    backgroundColor: "#ff99ff",
    marginTop: "-27px",
    marginLeft: "30px",
    width: "68px",
    height: 67,
    overflow: "hidden",
    borderRadius: "4px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    //absolute
    zIndex: 1000,
  },
  mediaAvatar: {
    margin: "-40px auto 0",
    width: "80px",
    height: "80px",
    borderRadius: "100px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    zIndex: 1000,
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(10),
      width: "25ch",
    },

  },
  text12: {
    "& .MuiTextField-root": {
      margin: theme.spacing(10),
      width: "25ch",
    },
  },
  icon: {
    marginTop: "7px",
    marginLeft: "6px",
  },
  margin: {
    margin: theme.spacing(1),
    width: '26ch',
  },
  withoutLabel: {
    marginTop: theme.spacing(5),
    
  },
  textField1: {
    width: '25ch',
    
  },
});
export default styles;
