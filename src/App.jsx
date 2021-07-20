import React from 'react';
import CountryList from './compoenents/CountryList';
import PopularLanguage from './PopularLanguage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <PopularLanguage />
    <CountryList />
  </>
);

export default App;
