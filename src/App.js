import React, { useState } from "react";
import GetService from "./Service/GetService";
import PopularLanguage from "./PopularLanguage";
import CountryCard from "./compoenents/CountryCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { countries } = GetService();
  console.log(countries);
  return (
    <div className="row app-container">
      {countries.map((data) => (
        <CountryCard
          key={data.callingCodes + data.name}
          imgSrc={data.flag}
          CountryName={data.name}
          population={data.population}
          region={data.region}
          capital={data.capital}
          demonym={data.demonym}
        />
      ))}
    </div>
  );
};

export default App;
