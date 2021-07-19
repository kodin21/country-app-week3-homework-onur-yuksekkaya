const CountryCard = (props) => {
  return (
    <div className="country-card col-lg-3">
      <div className="img-container">
        <img src={props.imgSrc} />
      </div>
      <div className="country-card-body my-auto">
        <h2>{props.CountryName}</h2>
        <p>
          Population: <span>{props.population}</span>
        </p>
        <p>
          Region: <span>{props.region}</span>
        </p>
        <p>
          Capital: <span>{props.capital}</span>
        </p>
        <p>
          Demonym: <span>{props.demonym}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
