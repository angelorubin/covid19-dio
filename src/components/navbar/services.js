import { http } from "api";

export const getCountries = () => {
  return http("countries")
    .then((countries) => {
      // console.log(countries.data[0].country);
      return countries.data.map((countries) => countries.country);
    })
    .catch((error) => error);
};
