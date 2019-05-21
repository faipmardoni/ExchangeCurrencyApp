import { connect } from 'react-redux';

import Header from './units';
import { standsForCurrencies } from '../../constant';

const mapStateToProps = ({ home: { base, value } }) => ({
  base,
  detailBase: standsForCurrencies[base] || '',
  value,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
