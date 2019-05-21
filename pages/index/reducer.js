import {
  initialState, GET_LATEST_RATES, GET_LATEST_RATES_LOADING,
  GET_LATEST_RATES_ERROR, SET_SHOW_SELECT_AVAILABLE_CURRENCIES,
  SET_CURRENCIES_LIST,
} from './constant';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LATEST_RATES:
      return {
        ...state,
        ...payload,
        getLatestRatesLoading: false,
        getLatestRatesError: false,
      };
    case GET_LATEST_RATES_LOADING:
      return {
        ...state,
        getLatestRatesLoading: true,
        getLatestRatesError: false,
      };
    case GET_LATEST_RATES_ERROR:
      return {
        ...state,
        getLatestRatesLoading: false,
        getLatestRatesError: true,
        getLatestRatesErrorMessage: payload,
      };
    case SET_SHOW_SELECT_AVAILABLE_CURRENCIES:
      return {
        ...state,
        showSelectAvailableCurrencies: payload,
      };
    case SET_CURRENCIES_LIST:
      return {
        ...state,
        currencies: payload,
      };
    default:
      return state;
  }
};
