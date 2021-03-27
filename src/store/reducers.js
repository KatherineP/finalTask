import {
  LOGIN,
  LOGIN_FROM_LOCAL_STORAGE,
  API_ERROR,
  LOAD_ALL_BOOKS,
  LOG_OUT,
} from './types';

const initState = {
  user: {},
  username: null,
  loading: true,
  error: null,
  books: [],
  isAuthenticated: false,
};

// const clearLocalStorage = () => {
//   localStorage.removeItem('userInfo');
// };

export function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        user: action.userInfo,
        isAuthenticated: true,
      };
    case API_ERROR:
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    case LOGIN_FROM_LOCAL_STORAGE:
      return { ...state, user: action.userInfo };
    case LOAD_ALL_BOOKS:
      return { ...state, loading: false, books: action.books };
    case LOG_OUT:
      return { ...state, user: {} };
    default:
      return state;
  }
}

export default reducer;
