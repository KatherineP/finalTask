import './book-list-item.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { clearSelectedBook } from '../../store/actionCreators';
import { useDispatch } from 'react-redux';

const BookListItem = ({ book, history }) => {
  const dispatch = useDispatch();
  const { title, author, price, cover, id } = book;

  return (
    <div className="card">
      <img src={cover} className="card-text card-img" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{author}</p>
        <div className="d-flex footer-card-section">
          <p className="card-text">{price} $</p>
          <button
            className="btn btn-info"
            onClick={() => {
              history.push(`/catalog/${id}`);
              dispatch(clearSelectedBook());
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BookListItem);
