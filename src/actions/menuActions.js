import * as menuEvents from "../events/menuEvents";

export const handleSidebar = () => {
  return dispatch => {
    dispatch({
      type: menuEvents.HANDLE_SIDEBAR,
    });
  };
};