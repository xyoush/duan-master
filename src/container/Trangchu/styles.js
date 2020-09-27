const styles = (theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    marginTop: "40px",
  },
  card: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    overflow: "visible",

  },
  title: {
    fontSize: 14,
    fontWeight : 'bold',
    textTransform: 'uppercase',
  },
  title1: {
    fontSize: 14,
    fontWeight : 'bold',
  },
  title2: {
    fontSize: 14,
  },
  title3: {
    fontSize: 14,
    width: '400px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
  },
  ListIcon: {
    backgroundColor: "red[500]",
  },
  paper: {
    "& > *": {
      marginTop: "12px",
    },
    width: "60px",
    height: "50px",
    textAlign: "center",
    marginLeft: "30px",
    margin: "-20px auto 0",
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    "& > *": {
      color: "rgb(255 255 255)",
    },
  },
  extendedIcon: {
    marginLeft: theme.spacing(10),
  },
});
export default styles;
