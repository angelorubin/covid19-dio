import React from "react";
import {
  Card,
  Typography,
  Grid,
  Select,
  NativeSelect,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Box,
  makeStyles,
} from "@material-ui/core";
import styled from "styled-components";
import { red, green, blue, grey } from "@material-ui/core/colors";
import Flag from "react-world-flags";

export const NavbarContainer = styled(Paper)`
  background-color: "white";
  padding: 20px;
`;

export const NavbarTitle = styled(Typography)`
  font-weight: bold;
  font-size: 30px;
`;

export const NavbarSelect = styled(Select)`
  min-width: 150px;
`;

export const NavbarSelectOption = styled(MenuItem)`
  font-size: 14px;
`;

export const StyledCard = styled(Card)`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : grey[100])};
  color: ${grey["A700"]};
  margin: 10px;
  font-size: 30px;
  padding: 10px;
`;

export const StyledName = styled(Typography)`
  font-size: 16px;
`;

export const StyledFlag = styled(Flag)`
  width: 30px;
  height: 25px;
`;
