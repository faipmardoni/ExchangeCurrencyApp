import { connect } from 'react-redux';

import Home from './units';
import { setShowSelectAvailableColumns, addCurrenciesList, getLatestRates } from './action';
import { standsForCurrencies } from './constant';

const mapStateToProps = ({
  home: {
    base, currencies, rates, showSelectAvailableCurrencies, getLatestRatesLoading,
  },
}) => {
  const availableCurrencies = Object.keys(standsForCurrencies)
    .filter(curr => ![...currencies, base].includes(curr))
    .map(curr => ({ label: curr, value: curr }));

  return {
    currencies, rates, showSelectAvailableCurrencies, availableCurrencies, getLatestRatesLoading,
  };
};

const mapDispatchToProps = {
  setShowSelectAvailableColumns: () => setShowSelectAvailableColumns(),
  addCurrenciesList: currency => addCurrenciesList(currency),
  getLatestRates: () => getLatestRates(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
