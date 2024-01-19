import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#1A3D7D",
    },
    secondary: {
      main: "#367DFD",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
        },
      },
    }
  },
});

export default theme;
