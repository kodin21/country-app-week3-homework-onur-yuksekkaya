import React from 'react';

const PopularLanguage = () => {
  const uniqueCountryLanguages = new Set();
  const countryLanguages = [];
  const result = [];

  const getCountries = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const jsonData = await response.json();

    jsonData.forEach((element) => {
      element.languages.forEach((languages) => {
        uniqueCountryLanguages.add(languages.name);
        countryLanguages.push(languages.name);
      });
    });
  };

  const setResult = () => {
    uniqueCountryLanguages.forEach((element) => {
      const sameLanguages = countryLanguages.filter((item) => item === element);
      result.push({ name: element, count: sameLanguages.length });
    });

    result.sort((a, b) => a.count - b.count);
  };

  const showResult = () => {
    console.table(result.slice(result.length - 10).reverse());
  };

  getCountries().then(setResult).then(showResult);

  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default PopularLanguage;
