import {
  LOGIN,
  LOGIN_FROM_LOCAL_STORAGE,
  API_ERROR,
  LOAD_ALL_BOOKS,
  LOG_OUT,
  LOAD_BOOK_BY_ID,
  CLEAR_SELECTED_BOOK,
  ADD_BOOK_TO_CART,
  GET_FILTER_PRICE_VALUE,
  GET_FILTER_TITLE_VALUE,
  PLACE_ORDER,
  CLEAR_CART,
} from './types';

const initState = {
  user: JSON.parse(localStorage.getItem('userInfo')) || {},
  username: null,
  loading: true,
  error: null,
  books: [],
  bookDetails: {},
  booksInTheCart: JSON.parse(localStorage.getItem('cart')) || [],
  filterPriceValue: 'Price',
  filterTitleValue: '',
};

const addBookToCart = (state, addedBook) => {
  const filteredBook = state.booksInTheCart.find(
    (book) => book.id === addedBook.id
  );
  let updatedCart;
  if (filteredBook) {
    updatedCart = state.booksInTheCart.map((book) => {
      if (book.id === addedBook.id)
        return {
          ...book,
          count: Number(book.count) + Number(addedBook.count),
          total:
            (Number(book.count) + Number(addedBook.count)) * Number(book.price),
        };
    });
  } else {
    updatedCart = [...state.booksInTheCart, addedBook];
  }

  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return {
    ...state,
    booksInTheCart: updatedCart,
  };
};

export function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        user: action.userInfo,
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
    case LOAD_BOOK_BY_ID:
      return { ...state, bookDetails: action.bookDetails, loading: false };
    case CLEAR_SELECTED_BOOK:
      return { ...state, bookDetails: {}, loading: true };
    case ADD_BOOK_TO_CART:
      return addBookToCart(state, action.addedBook);
    case GET_FILTER_PRICE_VALUE:
      return { ...state, filterPriceValue: action.priceFilterValue };
    case GET_FILTER_TITLE_VALUE:
      return { ...state, filterTitleValue: action.titleFilterValue };
    case PLACE_ORDER:
      return { ...state };
    case CLEAR_CART:
      localStorage.removeItem('cart');
      return { ...state, booksInTheCart: [] };
    default:
      return state;
  }
}

export default reducer;
