import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  NativeSelect,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import {
  NavbarContainer,
  NavbarTitle,
  NavbarSelect,
  NavbarSelectOption,
  StyledName,
  StyledFlag,
} from "./style";
import { COUNTRIES } from "commons/constants/countries";

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    fontSize: 30,
  },
  formControl: {
    minWidth: 150,
  },
}));

const navigatorHasShare = navigator.share;

const Navbar = ({ data, handleChange }) => {
  const classes = useStyles();

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid-19 - ${data[0].country}`,
      text: data[0],
      url: "http://covid19-dio.surge.sh",
    });
  };

  const ShareButton = ({ onClick }) => (
    <Button onClick={onClick} variant="contained">
      Share
    </Button>
  );

  const CopyButton = ({ onClick }) => (
    <Button onClick={onClick} variant="contained">
      Copy
    </Button>
  );

  const copyInfo = () => {
    navigator.clipboard.writeText(JSON.stringify(data));
  };

  return (
    <NavbarContainer>
      <Grid container>
        <Grid container item xs direction="column">
          <Grid item>
            <NavbarTitle>COVID-19</NavbarTitle>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel>Escolha o País</InputLabel>
              <NavbarSelect onChange={handleChange}>
                {COUNTRIES.map((data, index) => {
                  return (
                    <NavbarSelectOption value={data.name} key={data.name}>
                      <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item>
                          <StyledName>{data.name}</StyledName>
                        </Grid>
                        <Grid item>
                          <StyledFlag
                            code={data.code}
                            fallback={<span>unknown</span>}
                          />
                        </Grid>
                      </Grid>
                    </NavbarSelectOption>
                  );
                })}
              </NavbarSelect>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container item xs spacing={1}>
          {navigatorHasShare ? (
            <Grid item>
              <ShareButton onClick={shareInfo} />
            </Grid>
          ) : (
            <Grid item>
              <CopyButton onClick={copyInfo} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </NavbarContainer>
  );
};

export default Navbar;
