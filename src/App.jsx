import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GetService from './service/GetService';
import Country from './components/Country';
import CountryList from './components/CountryList';
import ToptenList from './components/ToptenList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { countries } = GetService();

  return (
    <>
      <Router>
        <div className="d-flex top-bar">
          <button type="button" className="back-button">
            <Link to="/">Country List</Link>
          </button>
          <button type="button" className="back-button">
            <Link to="/topten">Top 10 Language List</Link>
          </button>
        </div>
        <Route exact path="/" component={CountryList} />
        <Route exact path="/topten" component={ToptenList} />
        <Route
          path="/country/:code"
          render={(renderProps) => {
            const country = countries.find(
              // eslint-disable-next-line no-shadow
              (country) => country.alpha3Code === renderProps.match.params.code
            );
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Country {...renderProps} country={country} />;
          }}
        />
      </Router>
    </>
  );
};

export default App;
