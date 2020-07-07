import React from "react";
// import { StylesProvider } from "@material-ui/styles";
import { Grid, Typography, CssBaseline, makeStyles } from "@material-ui/core";
import GlobalStyle from "commons/styles";
import Main from "containers/main";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </>
  );
};

export default App;
