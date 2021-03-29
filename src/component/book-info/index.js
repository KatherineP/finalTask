import './book-info.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ErrorIndicator, Spinner, BookCart } from '../index';
import { loadBookById } from '../../store/middleware';

const BookInfo = ({ itemId }) => {
  const bookDetails = useSelector((state) => state.bookDetails);
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.token) {
      dispatch(loadBookById(user.token, itemId));
    }
  }, [dispatch, itemId, user]);

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  const hasData = !(loading || error);
  const content =
    hasData && !!bookDetails ? (
      <>
        <CardContent bookDetails={bookDetails} />
        <BookCart bookDetails={bookDetails} />
      </>
    ) : null;
  return (
    <div className="card-details d-flex">
      {error && <ErrorIndicator />}
      {loading && <Spinner />}
      {content}
    </div>
  );
};

const CardContent = ({ bookDetails }) => {
  const { title, cover, description, author, tags } = bookDetails;
  return (
    <div className="d-flex info-container">
      <div className="image-container">
        <img className="image" src={cover} alt={title} />
        <p className="book-desc">{description}</p>
      </div>
      <div>
        <h5 className="card-title">{title}</h5>
        <p className="book-auth">
          <small>{author}</small>
        </p>
        <div className="tags">
          <i className="fas fa-tags"></i>
          {tags && tags.join(', ')}
        </div>
      </div>
    </div>
  );
};

export { BookInfo };
