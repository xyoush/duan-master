const styles = (theme) => ({
  // nội dung ở dưới
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    flexWrap: "wrap",
  },
  gird: {
    margin: "-50px auto 50px",
    maxWidth: 1000,
    overflow: "visible",
    backgroundColor: "#ffffff",
  },
  card: {
    display:'flex',
    margin: "-60px auto 50px",
    maxWidth: 1000,
    overflow: "visible",
  },
  cardImg: {
    margin: "-68px auto 50px",
    maxWidth: "600px",
    marginTop: "100px",
    marginRight: "-10px",
    overflow: "visible",
  },
  // hình ảnh
  media: {
    backgroundColor: "rgb(105 8 154 / 87%)",
    marginTop: "-27px",
    marginLeft: "50px",
    width: "68px",
    height: 67,
    overflow: "hidden",
    borderRadius: "4px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    //absolute
    zIndex: 1000,
  },
  text12: {
    "& .MuiTextField-root": {
      margin: theme.spacing(10),
      width: "25ch",
    },
  },
  icon: {
    "& > *": {
      color: "white",
    },
    marginTop: "7px",
    marginLeft: "6px",
  },
  margin: {
    margin: theme.spacing(1),
    width: "26ch",
  },
  withoutLabel: {
    marginTop: theme.spacing(5),
  },
  textField1: {
    width: "25ch",
  },
  button: {
    float: "right",
   marginRight : '40px',
   marginTop : '30px'
  },
  Ten: {
    float: "right",
    marginRight: "330px",
    marginTop: "-30px",
    color: "	 #cc33ff",
  },
  paper: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "25ch",
    },
    height: "400px",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "25ch",
    },
    height : '400px',
    marginLeft : '100px'
  },
  card2: {
    backgroundColor: '#f3f3f3',
    margin: "120px auto 50px",
    maxWidth: 345,
    height: '35%',
    overflow: "visible"
  },
  media2: {
    margin: "-40px auto 0",
    width: "80px",
    height: "80px",
    borderRadius: "100px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    zIndex: 1000
  },
  cardtext2:{
    textAlign: 'center',
  },
  Typo : {
    fontWeight : 'bold'
  },
});
export default styles;
