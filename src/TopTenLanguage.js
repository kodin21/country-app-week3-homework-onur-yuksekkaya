import ApiService from "./Service/GetService";

const TopTenLanguage = () => {
  let myLog;
  const { countries } = ApiService();
  for (let i = 0; i < countries.length; i++) {
    myLog[i] += countries[i].languages[i];
  }
  return myLog;
};

export default TopTenLanguage;
