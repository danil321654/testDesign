import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF7800',
    },
    secondary: {
      main: '#343745',
    },

    font: {
      main: '#212529',
    },
    error: {
      main: red.A400,
    },

    background: {
      default: '#fff',
    },
  },
});





  
export default theme;
