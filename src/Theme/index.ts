import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    xxs: true;
    sm: true;
    msm: true;
    lsm: true;
    smd: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
  },
  breakpoints: {
    values: {
      xxs: 0, //Double extra small device
      xs: 360, //Extra small device .....Default Breakpoint
      sm: 480, //Small device default Breakpont
      msm: 576, //Mediam small mediam device
      lsm: 640, //Large small mediam device
      smd: 768, //small mediam device
      md: 992, //Mediam device .... Default Breakpoint
      lg: 1200, //Large Device ...Default Breakpont
      xl: 1536, // Extra large device ... Default Breakpoint
      xxl: 1920, //Bouble extra large device
      xxxl: 2560, //Tripple extra device
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '4%',
          paddingRight: '4%',
        },
      },
    },
  },
});

export default theme;
