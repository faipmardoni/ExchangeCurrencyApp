import { connect } from 'react-redux';

import Home from './units';
import { setShowSelectAvailableColumns, addCurrenciesList } from './action';
import { standsForCurrencies } from './constant';

const mapStateToProps = ({
  home: {
    base, currencies, rates, showSelectAvailableCurrencies,
  },
}) => {
  const availableCurrencies = Object.keys(standsForCurrencies)
    .filter(curr => ![...currencies, base].includes(curr))
    .map(curr => ({ label: curr, value: curr }));

  return {
    currencies, rates, showSelectAvailableCurrencies, availableCurrencies,
  };
};

const mapDispatchToProps = {
  setShowSelectAvailableColumns: () => setShowSelectAvailableColumns(),
  addCurrenciesList: currency => addCurrenciesList(currency),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
