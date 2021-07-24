import GetService from './service/GetService';

const PopularLanguage = () => {
  const uniqueCountryLanguages = new Set();
  const countryLanguages = [];
  const result = [];
  const { countries } = GetService();

  const getCountries = (data) => {
    data.forEach((element) => {
      element.languages.forEach((languages) => {
        uniqueCountryLanguages.add(languages.name);
        countryLanguages.push(languages.name);
      });
    });
    uniqueCountryLanguages.forEach((element) => {
      const sameLanguages = countryLanguages.filter((item) => item === element);
      result.push({ name: element, count: sameLanguages.length });
    });

    result.sort((a, b) => a.count - b.count);
    return result.slice(result.length - 10).reverse();
  };
  const topTen = getCountries(countries);

  return { topTen };
};

export default PopularLanguage;
