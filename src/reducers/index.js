import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import menuReducer from './menuReducer';

export default combineReducers({
  cart: cartReducer,
  menu: menuReducer
});
