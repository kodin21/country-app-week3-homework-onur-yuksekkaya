import React from 'react';
import getService from './Service/GetService';

const PopularLanguage = () => {
  let myLog = [];
  const { countries } = getService();
  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < countries[i].languages.length; j++) {
      myLog.push(countries[i].languages[j].name);
    }
  }

  const counts = {};
  myLog.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  var sortableLanguage = [];
  for (var language in counts) {
    sortableLanguage.push([language, counts[language]]);
  }

  sortableLanguage.sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(sortableLanguage);

  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default PopularLanguage;
