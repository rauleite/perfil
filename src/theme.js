import {
  blue,
  green,
  red,
  lightGreen,
  lightBlue,
  deepPurple
} from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// const backgroundColor = "#004CB4";
const backgroundColor = lightBlue[800];

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // type: "dark",

    primary: {
      main: backgroundColor
    },
    secondary: {
      // main: lightGreen.A200
      main: lightBlue[400]
    },
    error: {
      main: red.A400
    },
    // background: {
    //   default: backgroundColor
    // },
    text: {
      secondary: "#062700",
      primary: "#0F1C4D"
    }
  },
  typography: {
    fontFamily: [
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      // 'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
})

export default theme;
