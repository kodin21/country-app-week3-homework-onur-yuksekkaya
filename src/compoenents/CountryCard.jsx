import React from 'react';

const CountryCard = (props) => {
  const { imgSrc, CountryName, population, region, demonym, capital } = props;
  return (
    <div className="country-card col-lg-3">
      <div className="img-container">
        <img src={imgSrc} alt="country-flag" />
      </div>
      <div className="country-card-body my-auto">
        <h2>{CountryName}</h2>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
        <p>
          Demonym: <span>{demonym}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
