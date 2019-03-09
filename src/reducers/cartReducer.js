import create from './reducerFactory';
import * as cartEvents from '../events/cartEvents';

const initialState = {
  products: [
    {
      id: 1,
      name: 'pizza'
    },
    {
      id: 2,
      name: 'sushi'
    },
    {
      id: 3,
      name: 'roll'
    },
    {
      id: 4,
      name: 'cream'
    },
  ],
};

export default create(initialState, {
  [cartEvents.UPDATE_CART]: (state, action) => ({
    ...state,
    products: [...state.products, {
      id: Date.now(),
      name: action.data
    }]
  }),
});
