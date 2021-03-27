import './book-list.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../../store/middleware';
import { BookListItem } from '../index';
import { ErrorIndicator, Spinner } from '../index';
import { Redirect } from 'react-router-dom';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (user.token) {
      dispatch(loadBooks(user.token));
    }
  }, [dispatch, user.token]);

  const allBooks = books.map((book) => (
    <BookListItem book={book} key={book.id} />
  ));

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  const hasData = !(loading || error);
  const content = hasData ? allBooks : null;

  return (
    <div className="book-list">
      {error && <ErrorIndicator />}
      {loading && <Spinner />}
      {content}
    </div>
  );
};

export { BookList };
