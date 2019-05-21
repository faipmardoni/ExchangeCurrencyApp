import { SET_CURRENCIES_LIST } from '../../constant';

export const removeCurrency = idx => (dispatch, getState) => {
  const newList = [...getState().home.currencies];
  newList.splice(idx, 1);
  dispatch({
    type: SET_CURRENCIES_LIST,
    payload: newList,
  });
};

export const defaultFunc = () => null;
