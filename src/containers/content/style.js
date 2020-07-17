import React from "react";
import {
  Grid,
  Paper,
  Card,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

export const ContentContainer = styled(Box)``;

export const CardContainer = styled(Paper)`
  width: ${({ width }) => (width ? width : "100%")};
  padding: 10px;
  border-left-width: ${({ borderLeftWidth }) =>
    borderLeftWidth ? borderLeftWidth : "none"};
  border-left-color: ${({ borderLeftColor }) =>
    borderLeftColor ? borderLeftColor : "none"};
  border-left-style: ${({ borderLeftStyle }) =>
    borderLeftStyle ? borderLeftStyle : "none"};
`;

export const CardItem = styled(Typography)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "none")};
`;
