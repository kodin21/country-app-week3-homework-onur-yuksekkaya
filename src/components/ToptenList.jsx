import React from 'react';
import PopularLanguage from '../PopularLanguage';

const ToptenList = () => {
  const { topTen } = PopularLanguage();
  return (
    <div>
      Topten Language
      <ul className="">
        {topTen.map((data) => (
          <li key={data.name}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToptenList;
