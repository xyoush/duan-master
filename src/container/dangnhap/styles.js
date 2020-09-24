const styles = (theme) => ({
  background: {
    // backgroundColor: theme.palette.primary.main,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flex: " 1 0 auto",
    backgroundSize : '100%',
    backgroundImage : `URL(${'https://i.imgur.com/6T8GlYL.jpg'})`,
  },
  editInput : {
    color: '#f3f3f3 !important',
    
  },
  card : {
    borderRadius : (10,10,10,10),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    background  : 'none',
    maxWidth : '400px',
  },
  cardavt : {
    
    borderRadius : (10,10,10,10),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    background  : 'white',
    maxWidth : '120px',
    maxHeight: '90px',
    margin: 'Auto',
  },
  typo: {
    textAlign: "center",
    fontSize: "20px",
    color : 'white',
  },
  root: {
    flexGrow: 1,
  },
  image: {
    marginTop : '-50px',
    display : 'block',
    marginLeft : 'auto',
    marginRight : 'auto',
    height: '70px',
    width: "70px",
  },
  set : {
    color : 'white',
  },
  Fpass : {
    paddingTop : '20px',
    textAlign: "center",
    fontSize: "13px",
    color : 'grey',
  },
  a : {
    textDecoration : 'none',
  },
  button : {
    marginTop : '10px',
  },
  user : {
    marginTop : '10px',
    color: 'white',
    marginBottom : '15px'
  },
  pass : {
    marginTop : '10px',
    color: 'white',
    marginBottom : '20px'
  },
  
});
export default styles;
