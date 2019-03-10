import create from './reducerFactory';
import * as cartEvents from '../events/cartEvents';
import img1 from '../assets/media/1.jpg';
import img2 from '../assets/media/2.png';
import img3 from '../assets/media/3.jpg';
import img4 from '../assets/media/4.jpg';
import img5 from '../assets/media/5.jpg';

const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      img: img1,
      title: 'The Wedding Guide',
      text: 'The Wedding Guide',
      mainText: 'the most delicious food',
    },
    {
      id: 2,
      img: img2,
      title: 'His & Hers Vow Books',
      text: 'His & Hers Vow Books',
      mainText: '',
    },
    {
      id: 3,
      img: img3,
      title: 'Guest Book',
      text: 'Guest Book',
      mainText: 'the most delicious food',
    },
    {
      id: 4,
      img: img4,
      title: 'Invitation Folio',
      text: 'Invitation Folio',
      mainText: 'the most delicious food',
    },
    {
      id: 5,
      img: img5,
      title: 'Thank You Tags',
      text: 'Thank You Tags',
      mainText: '',
    },
  ],
};

export default create(initialState, {
  [cartEvents.UPDATE_CART]: (state, { data }) => {
    let newCart = [...state.cart];
    if (state.cart.find(item => item.id === data.id)) {
      newCart = newCart.map(item => {
        if (item.id === data.id) {
          return {...item, count: item.count + data.count}
        } else return item
      })
    } else newCart.push(data);
    return {
      ...state,
      cart: newCart
    }
  },
  [cartEvents.DELETE_ITEM_CART]: (state, { data }) => ({
    ...state,
    cart: state.cart.filter(item => item.id !== data)
  }),
});
