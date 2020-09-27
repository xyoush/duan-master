import { fade } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar : {
    backgroundColor : '#6103aa',
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    
    marginRight: '50px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '16ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  image : {
    backgroundColor: "white",
    width: "279px",
    height: "64px",
    borderRadius: "0 0 40px 0",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.01)",
    marginLeft : '-3px'
  },
});

export default styles;
