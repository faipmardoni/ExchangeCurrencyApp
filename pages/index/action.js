import axios from 'axios';

import {
  SET_SHOW_SELECT_AVAILABLE_CURRENCIES, SET_CURRENCIES_LIST,
  GET_LATEST_RATES_LOADING, GET_LATEST_RATES_ERROR, GET_LATEST_RATES,
} from './constant';

export const getLatestRates = () => (dispatch) => {
  dispatch({ type: GET_LATEST_RATES_LOADING });
  axios.get('https://api.exchangeratesapi.io/latest?base=USD')
    .then((res) => {
      dispatch({
        type: GET_LATEST_RATES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_LATEST_RATES_ERROR,
        payload: err.message,
      });
    });
};

export const setLatestRates = () => {

};

export const setShowSelectAvailableColumns = () => (dispatch, getState) => dispatch({
  type: SET_SHOW_SELECT_AVAILABLE_CURRENCIES,
  payload: !getState().home.showSelectAvailableCurrencies,
});

export const addCurrenciesList = value => (dispatch, getState) => {
  dispatch({
    type: SET_CURRENCIES_LIST,
    payload: [...getState().home.currencies, value],
  });
  dispatch(setShowSelectAvailableColumns());
};
