import {
  LOGIN,
  API_ERROR,
  LOAD_ALL_BOOKS,
  LOAD_BOOK_BY_ID,
  PLACE_ORDER,
} from './types';
import glitch from '../services';

const login = (username) => {
  return async (dispatch) => {
    try {
      const userInfo = await glitch.login(username);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      dispatch({
        type: LOGIN,
        userInfo,
      });
    } catch (err) {
      console.error(err.message);
      dispatch({
        type: API_ERROR,
        err,
      });
    }
  };
};

const loadBooks = (token) => {
  return async (dispatch) => {
    try {
      const books = await glitch.getAllBooks(token);
      dispatch({
        type: LOAD_ALL_BOOKS,
        books,
      });
    } catch (err) {
      console.error(err.message);
      dispatch({
        type: API_ERROR,
        err,
      });
    }
  };
};

const loadBookById = (token, id) => {
  return async (dispatch) => {
    try {
      const bookDetails = await glitch.loadBook(token, id);
      dispatch({
        type: LOAD_BOOK_BY_ID,
        bookDetails,
      });
    } catch (err) {
      console.error(err.message);
      dispatch({
        type: API_ERROR,
        err,
      });
    }
  };
};

const placeOrder = (token, booksFromCart) => {
  return async (dispatch) => {
    try {
      const messageAfterPurchase = await glitch.postPurchase(
        token,
        booksFromCart
      );
      dispatch({
        type: PLACE_ORDER,
        messageAfterPurchase,
      });
    } catch (err) {
      console.error(err.message);
      dispatch({
        type: API_ERROR,
        err,
      });
    }
  };
};

export { login, loadBooks, loadBookById, placeOrder };
