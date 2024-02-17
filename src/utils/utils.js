export const currencyFormat = (number) => {
  return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const currencyToNumber = (currency) => {
  // eslint-disable-next-line no-useless-escape
  return Number(currency.replace(/[^0-9\.]+/g, ""));
};

export const getImgUrl = (image) => {
  return new URL(`${image}`, import.meta.url).href;
};
