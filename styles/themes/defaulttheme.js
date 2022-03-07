import { createTheme } from "@mui/material/styles";
export const primaryColor = "#F55800";
const theme = createTheme({
  palette: {
    primary: { main: primaryColor },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "2.5rem",
    },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.8rem" },
    h4: { fontSize: "1.8rem" },
    body1: {},
    button: {},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        rounded: {
          borderRadius: 60,
          backgroundColor: primaryColor,
          color: "#FFF",
        },
      },
      variants: [
        {
          props: { variant: "rounded", className: ".MuiButton-contained" },
        },
      ],
    },
  },
});

export default theme;
