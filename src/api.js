import axios from "axios";

export const http = axios.create({
  baseURL: "https://covid19-brazil-api.now.sh/api/report/v1/",
});

/*
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
*/

export const getCountryByName = (countryName) => {
  return http("countries")
    .then((countries) => {
      // console.log(countries);
      return countries.data.filter(
        (data) => data.country.toLowerCase() === `${countryName.toLowerCase()}`
      );
    })
    .catch((error) => error);
};

export const getCountries = () => {
  return http("countries")
    .then((countries) => countries.data)
    .catch((error) => error);
};
