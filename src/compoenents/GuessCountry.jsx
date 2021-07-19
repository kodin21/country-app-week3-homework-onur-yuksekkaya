import GetService from '../Service/GetService';

const GuessCountry = () => {
  const { countries } = GetService();
  console.log(countries);
};
export default GuessCountry;
