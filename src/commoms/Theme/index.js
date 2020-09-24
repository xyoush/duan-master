import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  color: {
    primary: "#303F9F",
    secondary: "#FFF9C4",
    error: "#E64A19",
    textColor: "#FFFFFF",
    defaultTextColor: "#000000",
    hover: "rgba(0,0,0,0.08)",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    background: "#7B1FA2",
    textColor: "white",
    boderColor: "#cccccc",
  },
  spacing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 32, 64],
});
export default theme;
