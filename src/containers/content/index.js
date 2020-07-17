import React, { useEffect } from "react";
import {
  ContentContainer,
  CardContainer,
  CardItem,
} from "containers/content/style";
import { Grid } from "@material-ui/core";
import { formatDateToBr } from "commons/utils";

const Content = ({ data }) => {
  // console.log("CONTENT: ", data);

  useEffect(() => {
    // console.log("CONTENT: ", data);
  }, []);

  return (
    <ContentContainer>
      {data &&
        data.map((item, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs>
              <CardContainer
                borderLeftStyle="solid"
                borderLeftColor="red"
                borderLeftWidth="5px"
              >
                <CardItem fontSize="24px" fontWeight="bold">
                  {item.country}
                </CardItem>
                <CardItem>país</CardItem>
              </CardContainer>
            </Grid>
            <Grid item xs>
              <CardContainer
                borderLeftStyle="solid"
                borderLeftColor="green"
                borderLeftWidth="5px"
              >
                <CardItem fontSize="24px" fontWeight="bold">
                  {item.cases}
                </CardItem>
                <CardItem>casos</CardItem>
              </CardContainer>
            </Grid>
            <Grid item xs>
              <CardContainer
                borderLeftStyle="solid"
                borderLeftColor="blue"
                borderLeftWidth="5px"
              >
                <CardItem fontSize="24px" fontWeight="bold">
                  {item.confirmed}
                </CardItem>
                <CardItem>confirmados</CardItem>
              </CardContainer>
            </Grid>
            <Grid item xs>
              <CardContainer
                borderLeftStyle="solid"
                borderLeftColor="yellow"
                borderLeftWidth="5px"
              >
                <CardItem fontSize="24px" fontWeight="bold">
                  {item.deaths}
                </CardItem>
                <CardItem>mortes</CardItem>
              </CardContainer>
            </Grid>
            <Grid item xs>
              <CardContainer
                borderLeftStyle="solid"
                borderLeftColor="brown"
                borderLeftWidth="5px"
              >
                <CardItem fontSize="24px" fontWeight="bold">
                  {item.recovered}
                </CardItem>
                <CardItem>recuperados</CardItem>
              </CardContainer>
            </Grid>
            <Grid item xs>
              <CardContainer
                borderLeftStyle="solid"
                borderLeftColor="pink"
                borderLeftWidth="5px"
              >
                <CardItem fontSize="24px" fontWeight="bold">
                  {formatDateToBr(item.updated_at)}
                </CardItem>
                <CardItem>atualizado</CardItem>
              </CardContainer>
            </Grid>
          </Grid>
        ))}
    </ContentContainer>
  );
};

export default Content;
