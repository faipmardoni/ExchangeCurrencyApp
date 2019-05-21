import { connect } from 'react-redux';

import Home from './units';
import { standsForCurrencies } from '../../constant';
import { removeCurrency } from './action';

const mapStateToProps = ({
  home: {
    currencies, rates, base, value,
  },
}, { currency }) => ({
  currencies,
  rate: rates[currency] || 1,
  standsForCurrency: standsForCurrencies[currency] || '',
  base,
  value,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleRemoveCurrency: () => dispatch(removeCurrency(ownProps.idx)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
