import React, { memo, useState, useEffect, useCallback } from "react";
import { formatDateToBr } from "commons/utils";
import { Grid, Paper, Card, Typography, makeStyles } from "@material-ui/core";
import CovidBg from "assets/images/bg.jpg";
import { getCountryByName } from "containers/main/services";
import Navbar from "components/navbar";
import Content from "containers/content";
import { red, green, blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: 10,
    minHeight: "100vh",
    backgroundImage: `url(${CovidBg})`,
    backgroundRepeat: "none",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    overflowX: "hidden",
  },
}));

const Main = ({ test }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("brazil");

  const getData = useCallback(() => {
    return getCountryByName(country).then((data) => setData([{ ...data }]));
  }, []);

  useEffect(() => {
    getData(country);
  }, [getData, country]);

  const handleChange = async (e) => {
    // console.log(e.target.value);
    setCountry(e.target.value);
    // console.log(e.target.value.toLowerCase());
    const data = await getCountryByName(e.target.value.toLowerCase());
    // console.log(data);
    setData([{ ...data }]);
  };

  return (
    <div className={classes.main}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <Navbar handleChange={handleChange} data={data} />
        </Grid>
        <Grid item xs>
          <Content data={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
