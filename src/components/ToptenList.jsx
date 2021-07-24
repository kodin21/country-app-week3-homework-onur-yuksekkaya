import React, { useEffect } from 'react';
import PopularLanguage from '../PopularLanguage';

const ToptenList = () => {
  const returnData = PopularLanguage();
  useEffect(() => {
    console.log(returnData);
  });
  return (
    <div>
      Topten Language
      <ul>
        {returnData.map((data) => (
          <li>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToptenList;
