export const convertCountryNameToPortuguese = (countryName) => {
  return countryName;
};

export const formatDateToBr = (date) => {
  const newDate = new Date(Date.parse(date));
  // console.log(newDate);
  // console.log(newDate.getDate());

  const day = newDate.getDate(2);
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${day}/0${month}/${year}`;
};
