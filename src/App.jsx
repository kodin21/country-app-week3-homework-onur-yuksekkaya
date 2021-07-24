import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetService from './service/GetService';
import Country from './components/Country';
import ToptenList from './components/ToptenList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { countries } = GetService();

  return (
    <>
      <Router>
        <Route exact path="/" component={ToptenList} />
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
