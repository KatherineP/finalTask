import './book-list.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../../store/middleware';
import BookListItem from '../book-list-item';
import { ErrorIndicator, Spinner, PriceFilter, TitleSearch } from '../index';
import { Redirect } from 'react-router-dom';
import { filterBooksByPrice, searchBooksByTitle } from '../../utils';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const filterPriceValue = useSelector((state) => state.filterPriceValue);
  const filterTitleValue = useSelector((state) => state.filterTitleValue);

  useEffect(() => {
    if (user.token) {
      dispatch(loadBooks(user.token));
    }
  }, [dispatch, user.token]);

  const allBooks = filterBooksByPrice(
    searchBooksByTitle(books, filterTitleValue),
    filterPriceValue
  ).map((book) => <BookListItem book={book} key={book.id} />);

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  const hasData = !(loading || error);
  const content = hasData ? allBooks : null;
  return (
    <div>
      <div className="d-flex">
        <PriceFilter />
        <TitleSearch />
      </div>

      <div className="book-list">
        {error && <ErrorIndicator />}
        {loading && <Spinner />}
        {content}
      </div>
    </div>
  );
};

export { BookList };
