import { combineReducers } from 'redux';

import HomeReducer from '../pages/index/reducer';

export default combineReducers({
  home: HomeReducer,
});
