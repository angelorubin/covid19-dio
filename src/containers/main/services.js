import { http } from "api";

export const getCountries = async () => {
  return await http("countries")
    .then((countries) => countries.data.data)
    .catch((error) => error);
};

export const getCountryNames = async () => {
  return await http("countries")
    .then((data) => data.data.data.map((countries) => countries.country))
    .catch((error) => error);
};

export const getCountryByName = async (countryName) => {
  return await http(countryName)
    .then((country) => country.data.data)
    .catch((error) => error);
};
