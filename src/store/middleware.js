import { LOGIN, API_ERROR, LOAD_ALL_BOOKS } from './types';
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

const loadBooks = (username) => {
  return async (dispatch) => {
    try {
      const books = await glitch.getAllBooks(username);
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

export { login, loadBooks };
