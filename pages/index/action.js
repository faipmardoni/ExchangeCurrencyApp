import { SET_SHOW_SELECT_AVAILABLE_CURRENCIES, SET_CURRENCIES_LIST } from './constant';

export const getLatestRates = () => {

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
