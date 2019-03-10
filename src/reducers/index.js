import { combineReducers } from 'redux';

import shopReducer from './shopReducer';
import menuReducer from './menuReducer';

export default combineReducers({
  shop: shopReducer,
  menu: menuReducer
});
