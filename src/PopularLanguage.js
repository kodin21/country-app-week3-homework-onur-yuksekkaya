import React from 'react';
import getService from './Service/GetService';

const PopularLanguage = () => {
  const myLog = [];
  const { countries } = getService();
  for (let i = 0; i < countries.length; i += 1) {
    for (let j = 0; j < countries[i].languages.length; j += 1) {
      myLog.push(countries[i].languages[j].name);
    }
  }

  const counts = {};
  myLog.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const sortableLanguage = [];
  Object.keys(counts).forEach((language) =>
    sortableLanguage.push([language, counts[language]])
  );

  sortableLanguage.sort((a, b) => b[1] - a[1]);

  console.log(sortableLanguage);

  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default PopularLanguage;
