import create from './reducerFactory';
import * as menuEvents from "../events/menuEvents";

const initialState = {
  nav: [
    {
      title: 'Main',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Targets',
      link: '/'
    },
    {
      title: 'Sets',
      link: '/'
    }
  ],
  isOpenSidebar: false
};

export default create(initialState, {
  [menuEvents.HANDLE_SIDEBAR]: (state) => ({
    ...state,
    isOpenSidebar: !state.isOpenSidebar
  }),
});
