import * as cartEvents from "../events/cartEvents";

export const setCartItem = (item) => {
  return dispatch => {
    dispatch({
      type: cartEvents.UPDATE_CART,
      data: item
    });
  };
};

export const deleteCartItem = (id) => {
  return dispatch => {
    dispatch({
      type: cartEvents.DELETE_ITEM_CART,
      data: id
    });
  };
};