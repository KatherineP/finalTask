import {
  LOGIN_FROM_LOCAL_STORAGE,
  LOG_OUT,
  CLEAR_SELECTED_BOOK,
  ADD_BOOK_TO_CART,
  GET_FILTER_PRICE_VALUE,
  GET_FILTER_TITLE_VALUE,
  CLEAR_CART,
} from './types';

const loginFromLocalStorage = (userInfo) => ({
  type: LOGIN_FROM_LOCAL_STORAGE,
  userInfo,
});

const logOut = () => {
  localStorage.removeItem('userInfo');
  return {
    type: LOG_OUT,
  };
};

const clearSelectedBook = () => ({
  type: CLEAR_SELECTED_BOOK,
});

const addBookToCart = (addedBook) => ({
  type: ADD_BOOK_TO_CART,
  addedBook,
});

const getFilterPriceValue = (priceFilterValue) => ({
  type: GET_FILTER_PRICE_VALUE,
  priceFilterValue,
});

const getFilterTitleValue = (titleFilterValue) => ({
  type: GET_FILTER_TITLE_VALUE,
  titleFilterValue,
});

const clearCart = () => ({
  type: CLEAR_CART,
});

export {
  loginFromLocalStorage,
  logOut,
  clearSelectedBook,
  addBookToCart,
  getFilterPriceValue,
  getFilterTitleValue,
  clearCart,
};
